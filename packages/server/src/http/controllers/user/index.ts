import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../../core/lib/prisma";
import z from "zod";

export const getAll = async (request: Request, response: Response) => {
    try {
        const user = await prisma.user.findMany({
            orderBy: {
                name: "asc"
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                avatar_url: true,
                User_Permission: true,
                User_Role: true,
                created_at: true
            },
        });
        if (!user) {
            return response.status(404).json({
                status: 404,
                message: "Nenhum usuário encontrado!"
            });
        }
        return response.status(200).json({
            status: 200,
            message: "Usuários listados com sucesso!",
            data: user
        });
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao listar os usuários!",
            error
        })
    }
}

export const getById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                avatar_url: true,
                created_at: true,
                User_Permission: true,
                User_Role: true
            }
        });

        if (!user) {
            response.status(404).json({
                status: 404,
                message: "Usuário não encontrado!"
            });
        }

        response.status(200).json({
            status: 200,
            message: "Usuário encontrado com sucesso!",
            user
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao buscar o usuário!",
            error
        })
    }
}

export const create = async (request: Request, response: Response) => {
    const RequestBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8)
    });
    try {
        const { name, email, password } =  RequestBodySchema.parse(request.body);
        const hashPassword = bcrypt.hashSync(password, 12);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
            }
        });
        response.status(201).json({
            status: 201,
            message: "Usuário criado com sucesso!",
            user
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao criar o usuário!",
            error
        })
    }
}

export const update = async (request: Request, response: Response) =>  {
    try {
        const { id } = request.params;
        const { name, email, password } = request.body;
        const user = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                email,
                password
            }
        });
        response.status(200).json({
            status: 200,
            message: "Usuário atualizado com sucesso!",
            user
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao atualizar o usuário!",
            error
        })
    }
}

export const destroy = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
        response.status(200).json({
            status: 200,
            message: "Usuário deletado com sucesso!"
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao deletar o usuário!",
            error
        })
    }
}