import morgan from "morgan";
import express from "express";

export const formatLogMessage = (tokens: morgan.TokenIndexer, req: express.Request, res: express.Response) => {
    const method = tokens.method(req, res);
    const url = tokens.url(req, res);
    const status = tokens.status(req, res);
    const responseTime = tokens["response-time"](req, res);
    const origin = req.get("Origin") || "Unknown";
  
    return `${method} ${url} ${status} - Origin: ${origin} - Response Time: ${responseTime}ms`;
};