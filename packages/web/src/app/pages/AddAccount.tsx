import { useForm } from "react-hook-form";
import backgroundAddAccount from "../assets/background.jpg";
import { Input } from "../components/ui/input";
import { CreateUserReqSchema, createUserSchema } from "@/core/models/User/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/core/lib/utils";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useCreateAccount } from "@/core/hooks/account";

export default function AddAccount() {
    const { mutateAsync: createUserAccountFn } = useCreateAccount();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateUserReqSchema>({
        mode: "all",
        criteriaMode: "firstError",
        resolver: zodResolver(createUserSchema)
    });

    const handleUserFn = async (data: CreateUserReqSchema) => {
        await createUserAccountFn({
            name: data.name,
            email: data.email,
            password: data.password
        });

        reset();
    };

    return (
        <div className="h-screen w-screen flex bg-neutral-900">
            <div className="relative w-full lg:w-1/2 h-full flex flex-col gap-8 items-center justify-center">
                <div className="absolute top-4 left-4 md:top-10 md:left-6">
                    <Link to="/login" className="flex items-center gap-1 text-neutral-500 group">
                        <IconArrowLeft size={20} stroke={1.5} className="group-hover:text-neutral-50 transition-transform duration-200 translate-x-1 group-hover:translate-x-0" />
                        <span className="text-sm transition-colors duration-200 group-hover:text-neutral-50">Voltar</span>
                    </Link>
                </div>
                <header className="flex flex-col items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img 
                            src="/taskmanagement.svg" 
                            alt="logomarca" 
                            className="w-5 h-5"
                        />
                        <span className="text-sm tracking-wider text-nowrap text-neutral-400">Task Management</span>
                    </div>
                    <h1 className="text-2xl text-center font-bold mt-2">Cadastrar usuário</h1>
                </header>
                <div className="w-full md:w-[450px] md:mx-auto px-5">
                    <form onSubmit={handleSubmit(handleUserFn)} className="w-full">
                        <div>
                            <label htmlFor="name_adduser_form" className="flex flex-col gap-1.5">
                                <div className="space-x-0.5">
                                    <span className="text-sm text-neutral-500">Seu nome</span>
                                    <span className="text-red-500">*</span>
                                </div>
                                <Input type="text" {...register("name")} id="name_adduser_form" placeholder="Digite o nome completo" 
                                    className={cn("w-full border-neutral-300 focus-visible:border-task-management-first focus-visible:ring-4 focus-visible:ring-task-management-first/20",
                                        errors.name && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                    )}
                                />
                                <div className="h-4 flex items-center">
                                    {errors.name && <p className="text-sm text-red-500 font-light tracking-wider line-clamp-1">{errors.name?.message}</p>}
                                </div>
                            </label>
                            <label htmlFor="email_adduser_form" className="flex flex-col gap-1.5">
                                <div className="space-x-0.5">
                                    <span className="text-sm text-neutral-500">Seu e-mail</span>
                                    <span className="text-red-500">*</span>
                                </div>
                                <Input type="email" {...register("email")} id="email_adduser_form" placeholder="Digite o seu email" 
                                    className={cn("w-full border-neutral-300 focus-visible:border-task-management-first focus-visible:ring-4 focus-visible:ring-task-management-first/20",
                                        errors.email && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                    )}
                                />
                                <div className="h-4 flex items-center">
                                    {errors.email && <p className="text-sm text-red-500 font-light tracking-wider line-clamp-1">{errors.email?.message}</p>}
                                </div>
                            </label>
                            <label htmlFor="password_adduser_form" className="flex flex-col gap-1.5">
                                <div className="space-x-0.5">
                                    <span className="text-sm text-neutral-500">Sua senha</span>
                                    <span className="text-red-500">*</span>
                                </div>
                                <Input type="password" {...register("password")} id="password_adduser_form" placeholder="Digite uma senha" 
                                    className={cn("w-full border-neutral-300 focus-visible:border-task-management-first focus-visible:ring-4 focus-visible:ring-task-management-first/20",
                                        errors.password && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                    )}
                                />
                                <div className="h-4 flex items-center">
                                    {errors.password && <p className="text-sm text-red-500 font-light tracking-wider line-clamp-1">{errors.password?.message}</p>}
                                </div>
                            </label>
                            <label htmlFor="confirm_password_adduser_form" className="flex flex-col gap-1.5">
                                <div className="space-x-0.5">    
                                    <span className="text-sm text-neutral-500">Confirmar senha</span>
                                    <span className="text-red-500">*</span>
                                </div>
                                <Input type="password" {...register("confirmPassword")} id="confirm_password_adduser_form" placeholder="Confirmar senha" 
                                    className={cn("w-full border-neutral-300 focus-visible:border-task-management-first focus-visible:ring-4 focus-visible:ring-task-management-first/20",
                                        errors.confirmPassword && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                                    )}
                                />
                                <div className="h-4 flex items-center">
                                    {errors.confirmPassword && <p className="text-sm text-red-500 font-light tracking-wider line-clamp-1">{errors.confirmPassword?.message}</p>}
                                </div>
                            </label>
                        </div>
                        <Button type="submit" className="w-full mt-10 cursor-pointer text-white bg-task-management-first hover:bg-task-management-first">Cadastrar</Button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:block lg:w-2/3 h-full overflow-hidden relative before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-neutral-900 before:to-neutral-900/30">
                <img src={backgroundAddAccount} alt="" className="w-full h-full object-cover" />
            </div>
        </div> 
    )
}   
