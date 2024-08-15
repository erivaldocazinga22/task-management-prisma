import { describe, test, expect } from "vitest";
import supertest from "supertest";
import express from "express";
import { router } from "./router";

const app = express();
app.use(router);

describe("GET /", () => {
    test("Deve retornar status code 200", async () => {
        const response = await supertest(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("message");

        expect(response.body).toEqual({
            status: 200,
            message: "Hello word - task managment monorepo"
        });
    });
});