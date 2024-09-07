import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const getAll = async (request: Request, response: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: parseInt(request.body.user.id)
            },
            include: {
                User: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar_url: true,
                    }
                },
            }
        });

        if (!tasks) response.status(404).json({
            status: 404,
            message: "Nenhuma tarefa encontrada!"
        });

        response.status(200).json({
            status: 200,
            message: "Tarefas listadas com sucesso!",
            data: tasks
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao listar as tarefas!",
            error
        });
    }
} ;