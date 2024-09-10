import path from "node:path";
import fs from "node:fs";

export const StorageSynchronization = async (oringDir: string, remoteDir: string): Promise<boolean> => {
    const sourceFiles = fs.readdirSync(oringDir).sort();
    const destFiles = fs.readdirSync(remoteDir).sort();

    const sourcePaths = sourceFiles.map(file => path.join(oringDir, file));
    const destPaths = destFiles.map(file => path.join(remoteDir, file));

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
        return false;
    } else {
        return true;
    }
};