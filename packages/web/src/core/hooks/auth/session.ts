import { useQuery } from "@tanstack/react-query";
import { isAuthenticatedFn } from "./utils";

export function Session() {
    const querySession = useQuery({
        queryKey: ["session"],
        queryFn: isAuthenticatedFn,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: 1000 * 60 * 5,
        retry: 3,
        retryDelay: 1000,
        retryOnMount: true,
        refetchInterval: 1000 * 60 * 5,
    }) 
    
    return {
        ...querySession,
        data: querySession.data?.data.data
    }
}