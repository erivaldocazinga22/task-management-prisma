import { cn } from "@/core/lib/utils";
import { useForm } from "react-hook-form";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { OutherProviderRequest, SignInRequestData, SignInSchema } from "@/core/models/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOutherProvider, useSignIn } from "@/core/hooks/auth";

export default function SignIn() {
    const { mutateAsync: handleSignInCredentials } = useSignIn();
    const { mutateAsync: handleProviderCredentials} = useOutherProvider();
    const { register, handleSubmit, formState: { errors }, watch} = useForm<SignInRequestData>({
        mode: "all",
        criteriaMode: "firstError",
        resolver: zodResolver(SignInSchema)
    });

    const SignInWatch = watch();

    async function SignInFn<T extends CredentialResponse | SignInRequestData>(data: T): Promise<void> {
        if ("credential" in data) {
            if (data.credential) {
                const goodleCredential: OutherProviderRequest = jwtDecode(data.credential);
                await handleProviderCredentials(goodleCredential);
                return;
            }
        }

        console.log(data);
        await handleSignInCredentials(data);
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="h-screen sm:h-max sm:min-h-2/3 sm:min-w-[450px] w-full sm:w-10/12 md:w-1/2 lg:w-1/3 p-8 space-y-10 flex flex-col items-center justify-center bg-task-management-400">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img 
                            src="/taskmanagement.svg" 
                            alt="logomarca" 
                        />
                        <span className="text-lg text-nowrap font-medium">Task Management</span>
                    </div>
                </header>
                <div className="w-full"> 
                    <form onSubmit={handleSubmit(SignInFn)} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label htmlFor="" className="text-sm text-white">Email Address</label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        {...register("email")}
                                        placeholder="ex: jonhDoe@exemplo.com" 
                                        className={cn(`w-full bg-transparent focus:bg-transparent placeholder:text-task-management-100 border-task-management-100 focus:ring-4 focus:dark:outline-none focus:dark:ring-task-management-first`,
                                            !errors.email ? (SignInWatch.email && "border-green-500 focus:dark:ring-green-500" ): "border-red-500 focus:dark:ring-red-500"
                                        )}
                                    />
                                    <div className="absolute top-1/2 right-2 -translate-y-1/2">
                                        {!errors.email ? (SignInWatch.email && <IconCircleCheck size={22} stroke={1.5} className="text-green-500" />)
                                        : <IconCircleX size={22} stroke={1.5} className="text-red-500" />}
                                    </div>
                                </div>
                                <div className="h-2">
                                    {errors && <p className="text-red-500 text-sm line-clamp-1">{errors.email?.message}</p>}
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="" className="text-sm text-white">Password</label>
                                <div className="relative">
                                    <Input
                                        {...register("password")}
                                        type="password"
                                        placeholder="Digite a sua password" 
                                        className={cn(`w-full bg-transparent focus:bg-transparent placeholder:text-task-management-100 border-task-management-100 focus:ring-4 focus:dark:outline-none focus:dark:ring-task-management-first`,
                                            !errors.password ? (SignInWatch.password && "border-green-500 focus:dark:ring-green-500") : "border-red-500 focus:dark:ring-red-500"
                                        )}
                                    />
                                    <div className="absolute top-1/2 right-2 -translate-y-1/2">
                                        {!errors.password ? (SignInWatch.password && <IconCircleCheck size={22} stroke={1.5} className="text-green-500" />)
                                        : <IconCircleX size={22} stroke={1.5} className="text-red-500" />}
                                    </div>
                                </div>
                                <div className="h-2">
                                    {errors && <p className="text-red-500 text-sm line-clamp-1">{errors.password?.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Button type="submit" className="w-full cursor-pointer text-white bg-task-management-first hover:bg-task-management-first">Entrar</Button>
                    </form>
                    <div className="space-y-2">
                        <span className={`relative w-full h-10 text-center flex items-center justify-center gap-4 text-task-management-100 
                            before:block before:h-0.5 before:w-full before:bg-task-management-300
                            after:block after:h-0.5 after:w-full after:bg-task-management-300
                        `}>ou</span>
                        <div className="flex items-center justify-center">
                            <GoogleLogin
                                onSuccess={(response) => SignInFn<CredentialResponse>(response)}
                                theme="filled_black"
                                type="standard"
                                size="large"
                                shape="square"
                                context="signin"
                            />
                            {/* <Button type="button" className="space-x-2 cursor-pointer">
                                <img src="" alt="logo do google" className="w-6 h-6" />
                                <span className="text-sm">SignIn with Google</span>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
