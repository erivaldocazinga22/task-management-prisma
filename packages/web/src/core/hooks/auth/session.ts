import { useQuery } from "@tanstack/react-query";
import { isAuthenticatedFn } from "./utils";

export function Session() {
    const querySession = useQuery({
        queryKey: ["session"],
        queryFn: isAuthenticatedFn,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 3,
    }) 
    
    return {
        ...querySession,
        data: querySession.data?.data.data
    }
}