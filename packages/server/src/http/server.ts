import { Chalk } from "core/lib/chalk.config";
import { env } from "../core/lib/env";
import { server } from "./app";
import { runningController } from "core/hooks/running-controller";

const { PORT, SESSION_HOST, PROTOCOL } = env();

server.listen(PORT, () => {
    runningController().then(async isCanRunning => {
        const chalk = await Chalk();
        console.log(" ");
        if (!isCanRunning) {
            console.log(chalk.bold.redBright("❌ Server cannot start, shutting down."));
            return process.exit(1); 
        }
        console.log(chalk.bold.greenBright(`💥 Server running at ${chalk.underline(`${PROTOCOL}://${SESSION_HOST}:${PORT}/`)}`));
        console.log(" ");
    });
    
}); 
