import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
    try {
        const hashPassword = await bcrypt.hash("password", 12);
        await prisma.user.create({
            data: {
                name: "Erivaldo Cazinga",
                email: "erivaldocazinga2206@gmail.com",
                password: hashPassword,
                avatar_url: null,
            }
        });
    } catch (error) {
        throw error;
    }
}

main().catch(() => {
    console.log("Erro ao rodar a seed");
});