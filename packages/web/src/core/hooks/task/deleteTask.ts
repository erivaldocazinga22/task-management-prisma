import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTaskFn } from "./utils";
import toast from "react-hot-toast";

export const DeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTaskFn,
        onSuccess(Response) {
            toast.success(Response.data.message);
            queryClient.invalidateQueries({ queryKey: ["task-find"] })
        },
        onError() {
            toast.error("Falha ao deletar a tarefa");
            throw new Error("Failed to delete task");
        }
    });
}