import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const getAll = async (request: Request, response: Response) => {
    try {
        const roles = prisma.role.findMany();

        if(!roles) {
            return response.status(401).json({
                status: 401,
                message: "Não foi possível recuperar as roles."
            });
        }

        response.status(200).json({
            status: 200,
            message: "Roles recuperadas com sucesso!",
            data: roles
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao tentar salvar a nova role!",
            error: error,
        });
    }
};