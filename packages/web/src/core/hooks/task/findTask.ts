import { useQuery } from "@tanstack/react-query";
import { findManyTaskFn } from "./utils";

export const FindTask = () => {
    const taskQuery = useQuery({
        queryKey: ["task-find"],
        queryFn: findManyTaskFn
    });

    return {
        ...taskQuery,
        data: taskQuery.data?.data.data
    }
}