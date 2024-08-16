import * as jwt from "jsonwebtoken";
import { env } from "./env";

const { JWT_SECRET } = env();

export const createToken = (payload: object) => {
    return jwt.sign(payload, JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: 7 * 24 * 60 * 60 * 1000 // ou '7d' que equivale a 7 days
    });
}
export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
}