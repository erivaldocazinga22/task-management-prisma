import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";

export const getById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                avatar_url: true,
                created_at: true,
                User_Permission: true,
                User_Role: true
            }
        });

        if (!user) {
            response.status(404).json({
                status: 404,
                message: "Usuário não encontrado!"
            });
        }

        response.status(200).json({
            status: 200,
            message: "Usuário encontrado com sucesso!",
            user
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao buscar o usuário!",
            error
        })
    }
}