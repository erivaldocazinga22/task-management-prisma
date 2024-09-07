import { useMutation } from "@tanstack/react-query"
import { createAccountFn } from "./utils";
import { toast } from "react-toastify";

export const useCreateAccount = () => {
    return useMutation({
        mutationFn: createAccountFn,
        onSuccess(Response) {
            toast.success(Response.data.message);
        },
        onError(error) {
            toast.error(error.message);
            throw error;
        }
    });
}