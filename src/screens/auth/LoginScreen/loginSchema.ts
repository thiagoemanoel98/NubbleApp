import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('email inválido'),
  password: z
    .string()
    .min(1, 'senha obrigatória deve ter no mínimo 8 caracteres'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
