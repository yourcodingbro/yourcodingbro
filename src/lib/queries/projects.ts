import { createQueryKeys } from "@lukemorales/query-key-factory";
import { createClient } from "@/lib/supabase/client";
import type { Project } from "@/types/project";

async function fetchProjects(): Promise<Project[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("projects").select("*");

  if (error) throw new Error(error.message);

  return data ?? [];
}

export const projectKeys = createQueryKeys("projects", {
  all: {
    queryKey: null,
    queryFn: fetchProjects,
  },
});
