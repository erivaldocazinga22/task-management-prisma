import { Router } from "express";
import * as AuthController from "../controllers/auth";
import { validateToken } from "../middlewares/AuthToken";

export const router = Router();

router.post("/login", AuthController.LoginFn);
router.post("/login/provider", AuthController.AuthenticatedProvider);
router.post("/validate", validateToken, AuthController.ValidateFn);
