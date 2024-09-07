import { HttpResponse } from "../httpResponse";

export type ITask = {
    id: string;
    title: string;
    description: string;
    status: "IN_PROGRESS" | "PENDING" | "COMPLETED" | "INTERRUPTED";
    created_at: string;
    User: {
      id: number;
      name: string;
      email: string;
      avatar_url?: string;
    }
}

export type TaskRequest = {
    id: ITask["id"];
    title: ITask["title"];
    description: ITask["description"];
    status: ITask["status"];
}

export type TaskResponse = HttpResponse<ITask[]>