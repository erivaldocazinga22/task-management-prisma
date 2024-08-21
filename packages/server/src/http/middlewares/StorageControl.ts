import { Chalk } from "../../core/lib/chalk.config";
import fs from "fs";
import path from "path";


export function StorageControl(sourceDir: string, destDir: string) {
    try {
        const sourceFiles = fs.readdirSync(sourceDir).sort();
        const destFiles = fs.readdirSync(destDir).sort();

        const sourcePaths = sourceFiles.map(file => path.join(sourceDir, file));
        const destPaths = destFiles.map(file => path.join(destDir, file));

        const sourceStats = sourcePaths.map(filePath => fs.statSync(filePath));
        const destStats = destPaths.map(filePath => fs.statSync(filePath));

        const sourceDetails = sourceFiles.map((file, index) => ({
            fileName: file,
            size: sourceStats[index].size,
            isDirectory: sourceStats[index].isDirectory(),
        }));

        const destDetails = destFiles.map((file, index) => ({
            fileName: file,
            size: destStats[index].size,
            isDirectory: destStats[index].isDirectory(),
        }));

        const missingInDest = sourceDetails.filter(sourceFile => 
            !destDetails.some(destFile => 
                destFile.fileName === sourceFile.fileName && 
                destFile.size === sourceFile.size &&
                destFile.isDirectory === sourceFile.isDirectory
            )
        );

        const missingInSource = destDetails.filter(destFile => 
            !sourceDetails.some(sourceFile => 
                sourceFile.fileName === destFile.fileName && 
                sourceFile.size === destFile.size &&
                sourceFile.isDirectory === destFile.isDirectory
            )
        );

        if (missingInDest.length > 0 || missingInSource.length > 0) {
            console.warn(`⚠️ Aviso: Diferenças encontradas entre os diretórios "storage-origin" e "storage-remote".`);
            console.warn("Arquivos faltando no diretório de destino:", missingInDest);

            console.log(" ");
            Chalk().then((chalk) => {
                console.log(
                    `${chalk.bgCyan.black(" INSTRUÇÕES ")}` +
                    ` ${chalk.white("Para sincronizar os diretórios, execute:")}\n` +
                    `\n  ${chalk.bold.green("yarn storage:link")} ${chalk.gray("(se estiver usando Yarn)")}\n` +
                    `  ${chalk.bold.green("npm run storage:link")} ${chalk.gray("(se estiver usando npm)")}\n` +
                    `\n${chalk.yellow("⚠️ Certifique-se de ter as permissões adequadas para realizar essa operação.")}`
                );
            })
        } else {
            console.log(`✅ Os diretórios "storage-origin" e "storage-remote" estão sincronizados.`);
        }
    } catch (error) {
        console.error("❌ Erro ao verificar diretórios:", error);
    }
}