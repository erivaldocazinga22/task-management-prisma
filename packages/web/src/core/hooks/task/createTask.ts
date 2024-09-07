import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewTaskFn } from "./utils";

export const CreateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addNewTaskFn,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["task-find"]})
        }
    });
}
