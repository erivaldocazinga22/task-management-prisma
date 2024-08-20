import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";

export const update = async (request: Request, response: Response) =>  {
    try {
        const { id } = request.params;
        const { name, email } = request.body;
        const user = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                email,
            }
        });
        response.status(200).json({
            status: 200,
            message: "Usuário atualizado com sucesso!",
            user
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao atualizar o usuário!",
            error
        })
    }
}