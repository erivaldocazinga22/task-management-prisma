import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";

export const destroy = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({
                status: 400,
                message: "ID da tarefa é obrigatório!"
            });
        }

        await prisma.task.deleteMany({ where: { id } }).then(() => {
            return response.status(200).json({
                status: 200,
                message: "Tarefa(s) deletada(s) com sucesso!"
            });
        });
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao deletar a/s tarefa/s!",
            error
        });
    }
} ;