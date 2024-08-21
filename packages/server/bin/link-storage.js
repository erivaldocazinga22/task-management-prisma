const fs = require("node:fs");
const path = require("node:path");

const sourceDir = path.join(__dirname, "../", "src", "core", "storage");
const destDir = path.join(__dirname, "../", "public", "storage");

function copyFiles(source, destination) {
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
    }

    fs.readdir(source, (err, files) => {
        if (err) {
            console.error("Erro ao ler a pasta de origem:", err);
            return;
        }

        files.forEach(file => {
                const sourceFile = path.join(source, file);
                const destFile = path.join(destination, file);

            fs.stat(sourceFile, (err, stat) => {
                if (err) {
                    console.error("Erro ao obter informações do arquivo:", err);
                    return;
                }

                if (stat.isFile()) {
                    fs.copyFile(sourceFile, destFile, err => {
                        if (err) {
                            console.error("Erro ao copiar arquivo:", err);
                        } else {
                            console.log(`Arquivo copiado: ${file}`);
                        }
                    });
                } else if (stat.isDirectory()) {
                    copyFiles(sourceFile, destFile);
                }
            });
        });
    });
}

copyFiles(sourceDir, destDir);