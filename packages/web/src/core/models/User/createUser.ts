import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(10, { message: "O nome de ter no minimo 10 caracteres."}),
    email: z.string().email({ message: "Informe um email válido."}),
    password: z.string().min(8, { message: "A senha deve ter no minimo 8 caracteres."}),
    confirmPassword: z.string().min(8, { message: "A senha deve ter no minimo 8 caracteres."}),
}).refine(({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
        return false;
    }
    return true;
}, {
    path: ["password", "confirmPassword"],
    message: "Senha e confirmar senha não são iguais."
});

export type CreateUserReqSchema = z.infer<typeof createUserSchema>
export type CreateUserRequest = {
    name: string;
    email: string;
    password: string;
}