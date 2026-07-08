import type { Database } from "@/types/supabase";

export type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectTranslation =
  Database["public"]["Tables"]["project_translations"]["Row"];
export type ProjectType = Database["public"]["Enums"]["Project Type"];
export type ProjectStatus = Database["public"]["Enums"]["Project Status"];

export type Project = ProjectRow & {
  translations: ProjectTranslation[];
  translation: ProjectTranslation;
};
