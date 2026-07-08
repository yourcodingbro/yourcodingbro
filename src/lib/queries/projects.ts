import { createQueryKeys } from "@lukemorales/query-key-factory";
import { createClient } from "@/lib/supabase/client";
import type { Project } from "@/types/project";

async function fetchProjects(locale: string): Promise<Project[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*, translations:project_translations(*)");

  if (error) throw new Error(error.message);

  console.log(data);

  return (data ?? []).map((row: Project) => ({
    ...row,
    translations: row.translations,
    translation: row.translations.find((t) => t.locale === locale) ??
      row.translations.find((t) => t.locale === "en") ?? {
        id: 0,
        project_id: "",
        locale: "",
        title: "",
        short_desc: "",
        problems: [],
        responsibilities: [],
        challanges: [],
        results: [],
        created_at: "",
        updated_at: "",
      },
  }));
}

export const projectKeys = createQueryKeys("projects", {
  all: (locale: string) => ({
    queryKey: [locale],
    queryFn: () => fetchProjects(locale),
  }),
});
