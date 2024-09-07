import { axios } from "@/core/lib/axios";
import { HttpResponse } from "@/core/models/httpResponse";
import { CreateUserRequest } from "@/core/models/User/createUser";
import { AxiosPromise } from "axios";

export const createAccountFn = async ({ name, email, password }: CreateUserRequest): AxiosPromise<HttpResponse> => {
    return axios.post("/users", { name, email, password });
}