import { z } from "zod";

export const RequestBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
});