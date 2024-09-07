import { ITask } from "@/core/models/Task/findTask";
import { IconCircleCheck, IconDotsVertical, IconPencilMinus, IconScanEye, IconTrash, IconUserPlus } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useDestroyTask } from "@/core/hooks/task";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { cn } from "@/core/lib/utils";

type CardProps = ITask

export const Card = (data: CardProps) => {
    const { mutateAsync: MutateDestroyTask } = useDestroyTask();
    const deleteTaskFn = async () => {
        await MutateDestroyTask(data.id)
    };
    return (
        <div className="relative overflow-hidden h-28 p-2 rounded-lg border border-task-management-500 bg-task-management-500">
            <div className={cn("absolute top-1/2 right-0 -translate-x-1/2 w-12 h-12 rounded-full bg-task-management-first blur-3xl",
                data.status === "IN_PROGRESS" && "bg-purple-600"
            )} />
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <IconCircleCheck size={20} stroke={1.5} />
                    <span className="text-sm font-light">{data.title}</span>
                    <span className={cn("inline-block w-2 h-2 rounded-full bg-task-management-100",
                        data.status === "IN_PROGRESS" && "bg-purple-600",
                        data.status === "PENDING" && "bg-orange-600",
                        data.status === "INTERRUPTED" && "bg-green-600",
                        data.status === "COMPLETED" && "bg-red-600",
                    )} />
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button type="button">
                                <IconDotsVertical size={20} stroke={1.5} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="border-task-management-400 bg-task-management-500">
                            <ul>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <li className="px-4 py-1.5 text-white cursor-pointer flex items-center gap-2 hover:bg-task-management-400">
                                            <IconPencilMinus size={22} stroke={1.5} />
                                            <span className="text-sm">Editar</span>
                                        </li>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Actualizar tarfa</DialogTitle>
                                            <DialogDescription>Pode actualizar qual quer campo de uma tarfa</DialogDescription>
                                        </DialogHeader>
                                        <div>

                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <li onClick={deleteTaskFn} className="px-4 py-1.5 text-white cursor-pointer flex items-center gap-2 hover:bg-task-management-400">
                                    <IconTrash size={22} stroke={1.5} />
                                    <span className="text-sm">Remover</span>
                                </li>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <li className="px-4 py-1.5 text-white cursor-pointer flex items-center gap-2 hover:bg-task-management-400">
                                            <IconScanEye size={22} stroke={1.5} />
                                            <span className="text-sm">Visualizar</span>
                                        </li>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Detalhes da tarefa</DialogTitle>
                                            <DialogDescription>Pode Visualizar os detalhes da tarfa</DialogDescription>
                                        </DialogHeader>
                                        <div>
                                            {JSON.stringify({
                                                id: data.id,
                                                title: data.title
                                            })}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <li className="px-4 py-1.5 text-white cursor-pointer flex items-center gap-2 hover:bg-task-management-400">
                                            <IconUserPlus size={22} stroke={1.5} />
                                            <span className="text-sm">Adiconar membros</span>
                                        </li>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" sideOffset={10} className="text-white border-task-management-400 bg-task-management-500">
                                        Adicionar Membros
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </ul>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
            <div className="flex justify-between">
                <div></div>
                <div>
                </div>
            </div>
        </div>
    )
}
