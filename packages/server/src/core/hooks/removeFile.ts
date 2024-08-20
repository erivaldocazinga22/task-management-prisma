import fs from "node:fs";

export function remodeFile(filePath: string) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Erro ao deletar o arquivo:", err);
        } else {
            console.log("Arquivo deletado com sucesso:", filePath);
        }
    });
}