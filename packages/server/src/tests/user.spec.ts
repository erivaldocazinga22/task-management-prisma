import { describe, test, expect } from "vitest";
import supertest from "supertest";
import express from "express";
import { router } from "../http/routers/user";

const app = express();
app.use(router);

describe("User", () => {
    test("Deve retornar os usuários cadastrados", async () => {
        const response = await supertest(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("message");

        expect(Array.isArray(response.body.data)).toBe(true);

        expect(response.body.data.length).toBeGreaterThan(0);

        if (response.body.data.length > 0) {
            const user = response.body.data[0];
            expect(user).toHaveProperty("id");
            expect(user).toHaveProperty("name");
            expect(user).toHaveProperty("email");
        }   
    });
});