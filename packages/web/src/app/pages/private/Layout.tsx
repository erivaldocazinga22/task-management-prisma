import { Navigation } from "@/app/components/Navigation";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/app/components/ui/resizable";
import { useSession } from "@/core/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function RootLayout() {

    const { data: loggedUser, isLoading } = useSession();

    if (!isLoading && !loggedUser) return <Navigate to="/login" replace />

    return (
        <div className="w-screen h-screen overflow-hidden">
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-screen"
            >
                <ResizablePanel defaultSize={15} minSize={15} maxSize={18} className="p-2">
                   <Navigation />
                </ResizablePanel>
                <ResizableHandle withHandle={false} className="dark:bg-neutral-800" />
                <ResizablePanel defaultSize={85}>
                    <Outlet /> 
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
