import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string()
        .email()
        .transform(email => email.toLowerCase()),
    password: z.string().min(6, { message: "A senha deve ter no minimo 6 caracteres."})
});