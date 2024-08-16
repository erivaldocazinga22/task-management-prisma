import { Router } from "express";
import * as TaskControllers from "../controllers/task";
import { validateToken as Auth0 } from "../middlewares/AuthToken";

export const router = Router();

router.get("/", Auth0, TaskControllers.getAll);
router.get("/:id", Auth0, TaskControllers.getById);
router.post("/", Auth0, TaskControllers.create);
router.put("/:id", Auth0, TaskControllers.update);
router.delete("/:id", Auth0, TaskControllers.destroy);
