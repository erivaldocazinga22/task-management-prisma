import multer from "multer";
import path from "node:path";

export const prifileUploads = multer({ storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, "./public/storage/profile/");
        },
        filename: (request, file, callback) => {
            const extension = path.extname(file.originalname);
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
            callback(null, `task_management-${uniqueSuffix}${extension}`);
        }
    }),
    fileFilter: function (request, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|svg|webp)$/)) {
            callback(null, false);
            throw new Error("Only image files are allowed!");
        }
        callback(null, true)
    }
})