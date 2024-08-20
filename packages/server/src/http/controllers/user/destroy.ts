import { remodeFile } from "core/hooks/removeFile";
import { prisma } from "../../../core/lib/prisma";
import { Request, Response } from "express";
import path from "path";

export const destroy = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const destroyedUser = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });

        if (!destroyedUser) {
            return response.status(404).json({
                status: 404,
                message: "Usuário não encontrado!"
            })
        }

        remodeFile(`public/storage/profile/${destroyedUser.avatar_url}`);
        response.status(200).json({
            status: 200,
            message: "Usuário deletado com sucesso!",
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Ocorreu um erro ao deletar o usuário!",
            error
        })
    }
}