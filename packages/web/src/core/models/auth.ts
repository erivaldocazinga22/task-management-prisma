import { z } from "zod";
import { HttpResponse } from "./httpResponse";
//import { User } from "./user";

export const SignInSchema = z.object({
    email: z.string().email("Informe um email válido."),
    password: z.string().min(6, "A senha deve conter no minimo 6 caracteres."),
    providerId: z.string().min(10, "O provedor deve conter no minimo 10 carascteres.").optional(),
    /* remember_me: z.boolean() */
});
export type SignInRequestData = z.infer<typeof SignInSchema>; 

export type SignInResponseData = HttpResponse<{
    token: string,
    expiresAt: string
}> 

export type SessionResponseData = HttpResponse<{
    id: number,
    name: string,
    email: string,
    avatar_url?: string
}> 

export type OutherProviderRequest = {
    iss: string
    azp: string
    aud: string
    sub: string
    email: string
    email_verified: boolean
    nbf: number
    name: string
    picture: string
    given_name: string
    family_name: string
    iat: number
    exp: number
    jti: string
};
