import { Button } from "@/app/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

export default function Home() {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 h-20">
                <h1 className="text-xl font-semibold">Minhas Tasks</h1>
                <div>
                    <Button type="button" variant="secondary" className="text-white bg-task-management-first dark:bg-task-management-first dark:hover:bg-task-management-first">
                        <IconPlus size={22} />
                        <span>Adicionar nova</span>
                    </Button>
                </div>
            </nav>
        </div>
    )
}
