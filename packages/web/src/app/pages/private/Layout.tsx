import { Navigation } from "@/app/components/Navigation";
import { useSession } from "@/core/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function RootLayout() {

    const { data: loggedUser, isLoading } = useSession();

    if (!isLoading && !loggedUser) return <Navigate to="/login" replace />

    return (
        <div className="w-screen h-screen flex overflow-hidden bg-task-management-600">
            <Navigation />
            <Outlet />
        </div>
    )
}
