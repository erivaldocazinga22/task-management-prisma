import { axios } from "@/core/lib/axios"
import { TaskResponse, TaskRequest } from "@/core/models/Task/findTask";
import { AxiosPromise } from "axios";

export const findManyTaskFn = async (): AxiosPromise<TaskResponse> => {
    return axios.get("/tasks");
}

export const addNewTaskFn = async (data: TaskRequest) => {
    return axios.post("/tasks", data);
}

export const deleteTaskFn = async (id: string) => {
    return axios.delete(`/tasks/${id}`);
}