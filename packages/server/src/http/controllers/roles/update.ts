import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const update = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { name, description } = request.body;
        
        const role = await prisma.role.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                description
            },
        });
        
        response.json({
            status: 200,
            message: "Role atualizada com sucesso!",
            role,
        });
    
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao apagar a role!",
            error: error,
        });
    }
};