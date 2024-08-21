import cors from "cors";
import morgan from "morgan";
import express from "express";
import { AuthRouter, TaskRouter, UserRouter } from "./routers";
import { winstonLogger } from "../core/lib/winston";

export const server = express();
server.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

server.use(express.json());
server.use(morgan("dev", { stream: { write: (message) => winstonLogger.info(message.trim())}}));

server.use("/storage", express.static("public/storage"));
server.use("/api/auth", AuthRouter);
server.use("/api/users", UserRouter);
server.use("/api/tasks", TaskRouter); 
