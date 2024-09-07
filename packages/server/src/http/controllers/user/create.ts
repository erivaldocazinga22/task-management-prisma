import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import { RequestBodySchema } from "../../../core/types/userRequests";
import { removeFile } from "../../../core/hooks/removeFile";

export const create = async (request: Request, response: Response) => {
    const filePath = request.file?.path;
    try {
        const { data, error } = RequestBodySchema.safeParse(request.body);
        
        if (error) {
            if (filePath) removeFile(filePath);
            return response.status(400).json({
                status: 400,
                message: "Payload inválido",
                error: error,
            });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                avatar_url: request.file?.filename,
            }
        }).then(() => response.status(201).json({
            status: 201,
            message: "Usuário criado com sucesso!" 
        })).catch((error) => response.status(501).json({
            status: 501,
            message: "Ocorreu um erro ao criar o usuário!",
            error
        }));
    } catch (error) {
        if (filePath) removeFile(filePath);
        response.status(500).json({
            status: 500,
            message: "Falha na conexão com o servidor! Tente novamente.",
            error
        });   
    }
};
