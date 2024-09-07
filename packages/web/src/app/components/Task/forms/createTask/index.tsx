import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { MoreOptions } from "./moreOptions";
import { DialogClose } from "@/app/components/ui/dialog";
import { FormProvider, useForm } from "react-hook-form";
import { useAddTask } from "@/core/hooks/task";
import { TaskRequest } from "@/core/models/Task/findTask";

type CreateTaskProps = {
    onClose: () => void,
}

export const CreateTask = ({ onClose }: CreateTaskProps) => {
    const methods = useForm<TaskRequest>();
    const { mutateAsync: addNewTaskFn } = useAddTask();

    const handleAddTask = async (data: TaskRequest) => {
        await addNewTaskFn(data);
        methods.reset();
        onClose();
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleAddTask)}>
                <div className="space-y-5">
                    <Input type="text" {...methods.register("title")} placeholder="O que vais fazer agora?" />
                    <MoreOptions />
                </div>
                <div className="flex items-center gap-4 justify-between mt-6">
                    <DialogClose asChild>
                        <Button type="button">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" variant="secondary" className="text-white bg-task-management-first hover:bg-task-management-first">
                        Adicionar
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}
