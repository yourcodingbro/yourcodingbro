import type { Database } from "@/types/supabase";

export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectType = Database["public"]["Enums"]["Project Type"];
export type ProjectStatus = Database["public"]["Enums"]["Project Status"];
