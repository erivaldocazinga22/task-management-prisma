import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import { RoleSchema } from "../../../core/types/Role-and-Permission";

export const create = async (request: Request, response: Response) => {
    try {
        const { data, error } = RoleSchema.safeParse(request.body);
        
        if (error) {
            return response.status(400).json({
                status: 400,
                message: "Os dados enviados não são válidos!",
                data: error
            });
        }
        
        const createdRole = await prisma.role.create({
            data: {
                name: data.name,
                description: data.description
            }
        });

        if (!createdRole) {
            return response.status(400).json({
                status: 400,
                message: "Falha ao criar a role!",
            });
        }

        return response.json({
            status: 200,
            message: "Role criada com sucesso!",
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao tentar salvar a nova role!",
            error: error,
        });
    }
};