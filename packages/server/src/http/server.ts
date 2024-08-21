import { server } from "./app";
import { env } from "../core/lib/env";
import { StorageControl } from "./middlewares/StorageControl";
import path from "path";
import { Chalk } from "core/lib/chalk";

const { PORT, SESSION_HOST, PROTOCOL } = env();

server.listen(PORT, async () => {
    const sourceDir = path.join(__dirname, "../", "core", "storage");
    const destDir = path.join(__dirname, "../", "../", "public", "storage");
    StorageControl(sourceDir, destDir);
    const chalk = await Chalk();
    console.log("");
    
    console.log(chalk.bold.green(`Server running at ${PROTOCOL}://${SESSION_HOST}:${PORT}/`));
});