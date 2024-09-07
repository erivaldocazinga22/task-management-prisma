import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSession } from "@/core/hooks/auth";

import { Avatar } from "@/app/components/basic/Avatar";
import { NAVLINK } from "@/core/static/navgation";
import { NavLink } from "./NavLink";


export const Navigation = () => {
    const [active, setActive] = useState("");
    const location = useLocation();

    const { data: loggedUser } = useSession();
    useEffect(() => setActive(location.pathname),[location.pathname]);
    
    return (
        <aside className="flex flex-col items-center gap-4 h-full py-4 px-2">
            <Link to="/">
                <div className="min-w-12 min-h-12 w-16 h-16 p-4 mx-auto rounded-2xl flex gap-2 items-center justify-center bg-task-management-400">
                    <img src="/taskmanagement.svg" alt="logomarca taskmanagement" className="w-full h-full" />
                </div>
            </Link>
            <div className="flex-1">
                <nav className="p-2 mt-10 rounded-2xl flex flex-col gap-3 bg-task-management-500">
                    {NAVLINK.map((link, index) => (
                        <NavLink key={index} 
                            href={link.href} 
                            icon={link.icon} 
                            active={!!(active === link.href)} 
                        />
                    ))}
                </nav>
            </div>
            <Link to="/account/settings">
                <Avatar avatar_url={`${loggedUser?.avatar_url}`}
                    name={`${loggedUser?.name}`}
                />
            </Link>
        </aside>
    )
}
