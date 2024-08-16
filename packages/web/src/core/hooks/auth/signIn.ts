import { useMutation } from "@tanstack/react-query";
import { signInFn } from "./utils";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { CredentialResponse } from "@react-oauth/google";
import { SignInRequestData } from "@/core/models/auth";
import { toast } from "react-toastify";

export function SignIn() {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["signIn.cache"],
        mutationFn: (response: CredentialResponse | SignInRequestData) => signInFn(response),
        onSuccess(Response) {
            if (Response.data.data?.token) {
                setCookie(null, "taskmanagement.token", Response.data.data?.token, {
                    path: "/",
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