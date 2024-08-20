import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";

export const getAll = async (request: Request, response: Response) => {
    try {
        const user = await prisma.user.findMany({
            orderBy: {
                name: "asc"
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                avatar_url: true,
                User_Permission: true,
                User_Role: true,
                created_at: true
            },
        });
        if (!user) {
            return response.status(404).json({
                status: 404,
                message: "Nenhum usuário encontrado!"
            });
        }
        return response.status(200).json({
            status: 200,
            message: "Usuários listados com sucesso!",
            data: user
        });
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao listar os usuários!",
            error
        })
    }
}