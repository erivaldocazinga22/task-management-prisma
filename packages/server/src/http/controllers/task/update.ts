import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import z from "zod";

export const update = async (request: Request, response: Response) => {
    try {
        response.json({
            status: 200,
            message: "Rota de actualização inativa!"
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao actualizar a tarefa!",
            error
        })
    }
} ;