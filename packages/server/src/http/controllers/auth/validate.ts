import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";

export const validate = async (request: Request, response: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(request.body.user.id)
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
                password: false,
                created_at: false
            }
        })
        response.json({
            status: 200,
            message: "Usuário validado com sucesso!",
            data: user
        })
    } catch (error) {
        response.status(500).json({
            
        })
    }
}