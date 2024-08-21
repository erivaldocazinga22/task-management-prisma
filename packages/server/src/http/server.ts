import { Chalk } from "core/lib/chalk.config";
import { env } from "../core/lib/env";
import { server } from "./app";
import path from "path";
import { StorageControl } from "./middlewares/StorageControl";

const { PORT, SESSION_HOST, PROTOCOL } = env();

server.listen(PORT, () => {
    const sourceDir = path.join(__dirname, "../", "core", "storage");
    const destDir = path.join(__dirname, "../", "../", "public", "storage");
    StorageControl(sourceDir, destDir);
    Chalk().then((chalk) => {
        console.log(" ");
        console.log(chalk.bold.greenBright(`💥 Server running at ${chalk.underline(`${PROTOCOL}://${SESSION_HOST}:${PORT}/`)}`));
    });
});