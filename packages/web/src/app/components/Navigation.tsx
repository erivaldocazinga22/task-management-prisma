import { cn } from "@/core/lib/utils";
import { NAVLINK } from "@/core/static/navgation";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Avatar from "@/app/components/ui/avatar";

export const Navigation = () => {
    const [active, setActive] = useState(false);
    return (
        <aside className="flex flex-col gap-4 h-full">
            <div className="flex gap-2 items-center px-3 py-2">
                <img src="/taskmanagement.svg" alt="logomarca taskmanagement" className="w-6 h-6" />
                <h1 className="min-w-8 w-max text-nowrap">Task Management</h1>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    {NAVLINK.map((item, index) => item.href 
                        ? (
                            <li key={index}>
                                <Link to={item.href} className="flex items-center gap-2 py-1.5 px-4 text-neutral-500 hover:text-neutral-50 hover:bg-neutral-900">
                                    <item.icon className="w-6 h-6" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <div className="flex items-center gap-2 py-1.5 px-4 text-neutral-500 hover:text-neutral-50 hover:bg-neutral-900">
                                    <item.icon className="w-6 h-6" />
                                    <span>{item.label}</span>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <div className="border-t border-neutral-800">
                <div className="flex gap-4">
                    <span>Tema da aplicação</span>
                    <div className="h-6 w-12 rounded-2xl flex items-center bg-neutral-800"
                        onClick={() => setActive(previous => !previous)}
                    >
                        <span className={cn("w-5 h-5 rounded-full flex items-center justify-center bg-neutral-500 transition-transform duration-300",
                            active ? "translate-x-6" : "translate-x-1"
                        )}>
                            {active ? <IconMoon className="w-4 h-4"/> : <IconSun className="w-4 h-4"/>}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Avatar.Avatar>
                        <Avatar.AvatarImage src="" />
                        <Avatar.AvatarFallback>
                            EC
                        </Avatar.AvatarFallback>
                    </Avatar.Avatar>
                    <div className="text-sm font-light">
                        <span className="block">Nome do fulano</span>
                        <span className="block">nomedofulano@gmail.com</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}
