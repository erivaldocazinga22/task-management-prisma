import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "../core/lib/cors";
import helmet from "helmet";
import express from "express";
import compression from "compression";
import { AuthRouter, RoleRouter, TaskRouter, UserRouter } from "./routers";
import { winstonLogger } from "../core/lib/winston";

export const server = express()
	.use(cors(corsOptions))
	.use(helmet())
	.use(compression({ level: 6 }))

	.use(express.json())
	.use(morgan("dev", { stream: { write: (message) => winstonLogger.info(message.trim())}}))

	.use("/api/auth", AuthRouter)
	.use("/api/users", UserRouter)
	.use("/api/tasks", TaskRouter) 
	.use("/api/role", RoleRouter);
