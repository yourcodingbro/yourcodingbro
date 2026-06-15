import { z } from "zod";
import { Constants } from "@/types/supabase";

export const projectStatusOptions = Constants.public.Enums["Project Status"];
export const projectTypeOptions = Constants.public.Enums["Project Type"];

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  short_desc: z.string().min(1, "Short description is required"),
  status: z.enum(projectStatusOptions),
  thumbnail: z.union([z.instanceof(File), z.string()]).nullable(),
  type: z.array(z.enum(projectTypeOptions)),
  tags: z.array(z.string()),
  link: z
    .union([z.url("Please enter a valid URL"), z.literal("")])
    .optional(),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
