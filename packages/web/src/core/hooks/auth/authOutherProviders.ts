import { useMutation } from "@tanstack/react-query";
import { isAuthenticatedProviderFn } from "./utils";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function OutherProvider() {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["outherProvider.cache"],
        mutationFn: isAuthenticatedProviderFn,
        onSuccess(Response) {
            console.log(Response.data);
            
            if (Response.data.data?.token) {
                setCookie(null, "taskmanagement.token", Response.data.data?.token, {
                    path: "/",
                    secure: true,
                    maxAge: 60 * 60 * 24 * 7
                });

                toast.success(Response.data.message);
                navigate("/", { replace: true });
            }
        },
        onError(error) {
            toast.success(error.message);
            throw new Error(error.message);
        }
    });
}