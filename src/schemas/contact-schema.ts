import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(100, "Tell me a bit more — at least 100 characters"),
  phone: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactErrorMessages = {
  nameMin: string;
  emailInvalid: string;
  budgetRequired: string;
  messageMin: string;
};

export function getContactSchema(messages: ContactErrorMessages) {
  return z.object({
    name: z.string().min(2, messages.nameMin),
    email: z.email(messages.emailInvalid),
    budget: z.string({ error: messages.budgetRequired }),
    message: z.string().min(100, messages.messageMin),
    phone: z.string().optional(),
  });
}
