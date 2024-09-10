import { Chalk } from "../../lib/chalk.config";
import fs from "node:fs";
import path from "node:path";
import { StorageSynchronization } from "./storage-contoller";

const rootDir = path.join(__dirname, "../../../../");

export const runningController = async (): Promise<boolean> => {
    let isEnvaromentFile = false;
    let isPrismaConfig = false;
    let isConnectStorage = false;

    // Verificação se existe o arquivo .env
    const envFilePath = path.join(rootDir, ".env");
    if (fs.existsSync(envFilePath)) {
        isEnvaromentFile = true;
        // Verificação se o prisma está conectado e rodando
        const prismaFilePath = path.join(rootDir, "prisma", "schema.prisma");
        // arquivo "schema.prisma"
        if (fs.existsSync(prismaFilePath)) {
            isPrismaConfig = true;
        }
    }

    // Verificação se os directorios: "storage-origin" e a "storage-remote" remote estão sincrinizadas
    const storageOriginDir = path.join(rootDir, "src", "core", "storage");
    const storageRemoteDir = path.join(rootDir, "public", "storage");
    isConnectStorage = await StorageSynchronization(storageOriginDir, storageRemoteDir);

    console.log(`${isEnvaromentFile ? "✔️" : "✖️"} Arquivo .env foi encontrado com sucesso.`);
    console.log(`${isPrismaConfig ? "✔️" : "✖️"} Conexão com o Prisma estabelecida.`);
    console.log(`${isConnectStorage ? "✔️" : "✖️"} Os diretórios 'storage-origin' e 'storage-remote' estão devidamente sincronizados.`);

    if (!isConnectStorage) {
        console.log(" ");
        Chalk().then((chalk) => {
            console.log(
                `${chalk.bgCyan.black(" INSTRUÇÕES ")}` +
                ` ${chalk.white("Para sincronizar os diretórios, execute:")}\n` +
                `\n  ${chalk.bold.green("yarn storage:link")} ${chalk.gray("(se estiver usando Yarn)")}\n` +
                `  ${chalk.bold.green("npm run storage:link")} ${chalk.gray("(se estiver usando npm)")}\n` +
                `\n${chalk.yellow("⚠️ Certifique-se de ter as permissões adequadas para realizar essa operação.")}`
            );
        });
    }
    
    return (isEnvaromentFile && isPrismaConfig && isConnectStorage)??false;
};