import express from "express";

export const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        status: 200,
        message: "Hello word - task managment monorepo"
    })
})