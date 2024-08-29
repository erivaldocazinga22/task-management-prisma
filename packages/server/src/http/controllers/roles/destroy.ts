import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const destroy = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({
                status: 400,
                message: "ID da role é obrigatório!",
            });
        }

        await prisma.role.deleteMany({ where: { 
            id: parseInt(id)
        } }).then(() => {
            return response.status(200).json({
                status: 200,
                message: "Role apagada com sucesso!",
            });
        });
        
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao apagar a role!",
            error: error,
        });
    }
};