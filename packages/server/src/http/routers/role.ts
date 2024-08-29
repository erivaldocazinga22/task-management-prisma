import { Router } from "express";
import * as RoleControllers from "../controllers/roles";
import { validateToken as Auth0 } from "../middlewares/AuthToken";

export const router = Router();

router.get("/", RoleControllers.getAll);
router.get("/:id", RoleControllers.findUnique);
router.post("/", RoleControllers.create);
router.put("/:id", RoleControllers.update);
router.delete("/:id", RoleControllers.destroy);