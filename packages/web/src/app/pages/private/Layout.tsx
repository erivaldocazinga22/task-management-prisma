import { Navigation } from "@/app/components/Sidebar/Navigation";
import { useSession } from "@/core/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function RootLayout() {

    const { data: loggedUser, isLoading } = useSession();

    if (!isLoading && !loggedUser) return <Navigate to="/login" replace />

    return (
        <div className="pl-20">
            <Navigation />
            <Outlet />
        </div>
    )
}
