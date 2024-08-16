import * as bcrypt from "bcrypt";
import { env } from "../../../core/lib/env";
import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";
import { createToken } from "../../../core/lib/jwt";
import { ExpirationDate } from "../../../core/hooks/expirationDate";
import { SignInSchema } from "../../../core/types/authRequests";

export const login = async (request: Request, response: Response) => {
    try {
        const { data, error } = SignInSchema.safeParse(request.body);

        if (error) {
            return response.status(400).json({
                status: 400,
                message: "Payload inválido",
                error: error
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
        
        if (!user) {
            return response.status(404).json({
                status: 404,
                message: "Usuário não encontrado"
            });
        }

        const verifyPassword = bcrypt.compare(data.password, user.password);

        if (!verifyPassword) {
            return response.status(401).json({
                status: 401,
                message: "Credenciais inválidas."
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

        response.status(200).json({
            status: 200,
            message: "Login realizado com sucesso!",
            data: {
                token: token.token,
                expiresAt: token.expiresAt
            }
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro interno no servidor",
            error
        })
    }

}