import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const getById = async (request: Request, response: Response) => {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: request.params.id
            }
        });

        if (!task) {
            return response.status(404).json({
                status: 404,
                message: "Tarefa não encontrada!"
            });
        }

        response.status(200).json({
            status: 200,
            message: "Tarefa encontrada!",
            data: task
        });

    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao listar a tarefa!",
            error
        })
    }
} ;