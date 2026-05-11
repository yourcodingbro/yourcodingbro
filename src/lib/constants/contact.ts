import { z } from "zod";

export const budgetOptions = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 – $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-plus", label: "$15,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(100, "Tell me a bit more — at least 100 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
