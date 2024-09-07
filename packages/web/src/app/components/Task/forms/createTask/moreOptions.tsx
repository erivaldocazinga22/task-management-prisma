import { Input } from "@/app/components/ui/input";
import { cn } from "@/core/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

export const MoreOptions = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="mb-3">
                <button type="button" onClick={() => setOpen(prev => !prev)} className="flex items-center gap-1">
                    <span className="text-sm">Mais opções</span>
                    <IconChevronDown size={20} stroke={1.5} className={cn("rotate-180 transition duration-300", open && "rotate-0")} /> 
                </button>
            </div>
            {open && (
                <div>
                    <div className="flex gap-4 items-center mb-4">
                        <label htmlFor="init_taskForm" className="flex-1 space-y-1.5">
                            <span className="block text-sm text-task-management-100">Data de inicio</span>
                            <Input type="datetime-local" id="init_taskForm" />
                        </label>
                        <label htmlFor="init_taskForm" className="flex-1 space-y-1.5">
                            <span className="block text-sm text-task-management-100">Data de Termino</span>
                            <Input type="datetime-local" id="init_taskForm" />
                        </label>
                    </div>

                    <label htmlFor="init_taskForm" className="flex-1 space-y-1.5">
                        <span className="block text-sm text-task-management-100">Estado inicial</span>
                        <select>
                            <option value="">Selecione um status</option>
                            <option value="">Pendente</option>
                            <option value="">Em andamento</option>
                            <option value="">Concluida</option>
                        </select>
                    </label>
                </div>
            )}
        </div>
    )
}
