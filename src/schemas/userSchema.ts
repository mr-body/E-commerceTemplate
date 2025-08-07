import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phoneNumber: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  profession: z.string().optional(),
  bio: z.string().optional(),
  objective: z.string().optional(),
  referralSource: z.string().optional(),
  experienceLevel: z.string().optional(),
  interests: z.string().optional(), // pode usar z.array(z.string()) se quiser checkbox
});

export type UserFormData = z.infer<typeof userSchema>;
