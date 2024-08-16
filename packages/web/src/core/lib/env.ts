import { z } from "zod";

const envSchema = z.object({
	VITE_BASE_URL: z.string().url().min(3, "Precisa informar uma url válida!!"),
    VITE_GOOGLE_CLIENT_ID: z.string().min(20)
});

export const env = envSchema.parse(import.meta.env);