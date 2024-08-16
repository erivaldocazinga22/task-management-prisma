import { OutherProviderRequest, SessionResponseData, SignInRequestData, SignInResponseData } from "@/core/models/auth";
import { CredentialResponse } from "@react-oauth/google";
import { axios } from "@/core/lib/axios";
import { AxiosPromise } from "axios";

export const signInFn = async <T extends CredentialResponse | SignInRequestData>(data: T): AxiosPromise<SignInResponseData> => {
    
    /* {
        email: string,
        password: string,
        providerId: string
    } */

    return await axios.post("/auth/login", data);
}

export const signOutFn = async (): Promise<void> => {
    await axios.post("/auth/logout");
}

export const isAuthenticatedFn = async (): AxiosPromise<SessionResponseData> => {
    return await axios.post("/auth/validate");
}

export const isAuthenticatedProviderFn = async (data: OutherProviderRequest): AxiosPromise<SignInResponseData> => {
    return await axios.post("/auth/login/provider", data);
}