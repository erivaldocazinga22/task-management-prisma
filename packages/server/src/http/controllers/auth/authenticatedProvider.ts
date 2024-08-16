import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import { googleProviderSchema } from "../../../core/types/googleProvider";
import { ExpirationDate } from "../../../core/hooks/expirationDate";
import { createToken } from "../../../core/lib/jwt";
import { env } from "../../../core/lib/env";

export const AuthenticatedProvider = async (request: Request, response: Response) => {
    try {
        const { data, error} = googleProviderSchema.safeParse(request.body);

        if (error) {
            return response.status(400).json({
                status: 400,
                message: "Invalid Google provider payload",
                error: error,
            });

        }

        const user = await prisma.user.findUnique({
            where: {
                providerId: data.sub,
            },
        });

        if (!user) {
            return response.status(404).json({
                status: 404,
                message: "Usuário não encontrado"
            });
        }
        const { JWT_EXPIRATION_AMOUNT, JWT_EXPIRATION_UNIT } = env();
        const tokenGenerate = createToken({
            id: user.id,
            email: user.email,
            name: user.name
        })
        const token = await prisma.token.create({
            data: {
                userId: user.id,
                token: tokenGenerate,
                provider: data.iss,
                expiresAt:  ExpirationDate({ 
                    amount: parseInt(JWT_EXPIRATION_AMOUNT), 
                    unit: JWT_EXPIRATION_UNIT
                })
            }
        });

        if (!token) {
            return response.status(500).json({
                status: 500,
                message: "Ocorreu um erro ao gerar o token"
            });
        }

        return response.status(200).json({
            status: 200,
            message: "Login realizado com sucesso!",
            data: {
                token: token.token,
                expiresAt: token.expiresAt
            }
        });
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Ocorreu um erro interno no servidor",
            error: error,
        })
    }
}