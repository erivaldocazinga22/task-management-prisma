import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import z from "zod";

export const create = async (request: Request, response: Response) => {
    const { data, error } = z.object({
        title: z.string().min(3).max(50),
        description: z.string().max(200).optional(),
        user: z.object({
            id: z.number().int().positive(),
            email: z.string().email(),
            name: z.string().min(3).max(60)
        })
    }).safeParse(request.body);

    try {
        if (!data) {
            return response.json({
                status: 400,
                message: "Os dados enviados não são válidos!",
                error
            })
        }

        const createdTask = await prisma.task.create({ 
            data: {
                title: data.title,
                description: data.description,
                userId: data.user.id
            }
         });

        if (!createdTask) {
            return response.status(400).json({
                status: 400,
                message: "Os dados enviados não são válidos!",
            })
        }

        response.status(201).json({
            status: 201,
            message: "Tarefa cadastrada com sucesso!",
            data: {
                id: createdTask.id,
                title: createdTask.title,
                description: createdTask.description
            }
        })
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao cadastrar a tarefa!",
            error
        })
    }
} ;