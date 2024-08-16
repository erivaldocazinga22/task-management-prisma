import { Router } from "express";
import * as UserControllers from "../controllers/user";

export const router = Router();

router.get("/", UserControllers.getAll);
router.get("/:id", UserControllers.getById);
router.post("/", UserControllers.create);
router.put("/:id", UserControllers.update);
router.delete("/:id", UserControllers.destroy);
