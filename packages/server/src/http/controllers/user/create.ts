import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import { RequestBodySchema } from "../../../core/types/userRequests";
import { remodeFile } from "../../../core/hooks/removeFile";

export const create = async (request: Request, response: Response) => {
    const filePath = request.file?.path;
    try {
        const { data, error } = RequestBodySchema.safeParse(request.body);
        
        if (error) {
            if (filePath) remodeFile(filePath);
            return response.status(400).json({
                status: 400,
                message: "Payload inválido",
                error: error,
            });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const createdUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                avatar_url: request.file?.filename,
            }
        });

        response.status(201).json({
            status: 201,
            message: "Usuário criado com sucesso!",
            data: createdUser,  
        });
    } catch (error) {
        if (filePath) remodeFile(filePath);
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao criar o usuário!",
            error: error,
        });   
    }
}
