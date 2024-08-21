import { verifyToken } from "../../core/lib/jwt";
import { Request, Response, NextFunction } from "express";

export const validateToken = async (request: Request, response: Response, next: NextFunction) => {
    const headersAuth = request.headers['authorization'];
    if (!headersAuth) {
        return response.status(401).json({
            status: 401,
            message: "Nenhum token fornecido."
        });
    }
    
    const token = headersAuth.split(" ")[1];
    
    if (!token) {
        return response.status(401).json({ 
            status: 401, 
            message: "Nenhum token fornecido." 
        });
    }
    
    try {
        const decoded = verifyToken(token);
        if (!decoded) {
            return response.status(401).json({ 
                status: 401, 
                message: "Usuário não autorizado." 
            });
        }
        request.body.user = decoded;
        request.body.token = token;
        next();
    } catch (error) {
        return response.status(500).json({ 
            status: 500, 
            message: "Falha ao autenticar o token.",
            error
        });
    } 
};