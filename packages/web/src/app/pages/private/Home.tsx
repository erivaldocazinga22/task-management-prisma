import { Card } from "@/app/components/Card";
import { CreateTask } from "@/app/components/Task/forms/createTask";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { useTask } from "@/core/hooks/task";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Home() {
    const { data: tasks } = useTask();
    const [active, setActive] = useState(false);
    
    return (
        <div className="flex-1">
            <nav className="flex items-center justify-between px-6 h-20">
                <h1 className="text-xl font-semibold">Minhas Tasks</h1>
                <div>
                    <Dialog open={active} onOpenChange={setActive}>
                        <DialogTrigger asChild> 
                            <Button type="button" variant="secondary" className="text-white bg-task-management-first dark:bg-task-management-first hover:bg-task-management-first">
                                <IconPlus size={22} />
                                <span>Adicionar nova</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent aria-describedby="new-task" className="bg-task-management-600 border-task-management-400">
                            <DialogHeader>
                                <DialogTitle>Nova tarefa</DialogTitle>
                                <DialogDescription>Adicone uma nova tarefa</DialogDescription>
                            </DialogHeader>
                            <CreateTask onClose={()=> setActive(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {tasks?.map(task => (
                    <Card key={task.id} {...task} />
                ))}
            </div>
        </div>
    )
}
