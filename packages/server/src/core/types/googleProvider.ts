import { z } from "zod";

export const googleProviderSchema = z.object({
    iss: z.string().min(20),
    azp: z.string().min(20),
    aud: z.string().min(20),
    sub: z.string().min(10),
    email: z.string().min(10),
    email_verified: z.boolean(),
    nbf: z.number().int().positive(),
    name: z.string().min(6),
    picture: z.string().min(20),
    given_name: z.string().min(3),
    family_name: z.string().min(3),
    iat: z.number().int().positive(),
    exp: z.number().int().positive(),
    jti: z.string().min(10),
});

export type IGoogleProvider = z.infer<typeof googleProviderSchema>;