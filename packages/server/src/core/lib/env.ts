import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT:  z.string() || z.number(),
    SESSION_HOST: z.string().ip(),
    PROTOCOL: z.enum(["http", "https"]),
    JWT_SECRET: z.string(),
    JWT_EXPIRATION_AMOUNT: z.string() || z.number().int().positive(),
    JWT_EXPIRATION_UNIT: z.enum(["days", "weeks", "months", "years"]),
});

export const env = () => envSchema.parse(process.env);