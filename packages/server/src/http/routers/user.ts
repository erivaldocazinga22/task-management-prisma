import { Router } from "express";
import * as UserControllers from "../controllers/user";
import prifileUploads from "http/middlewares/ProfileUploads";

export const router = Router();

router.get("/", UserControllers.getAll);
router.get("/:id", UserControllers.getById);
router.post("/", prifileUploads.single("avatar_url"), UserControllers.create);
router.put("/:id", UserControllers.update);
router.delete("/:id", UserControllers.destroy);
