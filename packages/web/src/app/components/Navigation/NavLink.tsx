import { cn } from "@/core/lib/utils";
import { Link } from "react-router-dom";

type NavLinkProps = {
    href: string;
    icon: React.ElementType;
    active: boolean;
}

export const NavLink = ({ href, icon: Icon, active }: NavLinkProps) => {
    return (
        <Link to={href} className={cn("p-3 rounded-xl text-task-management-100 hover:text-neutral-400", 
            active && "text-neutral-50 hover:text-neutral-50 bg-task-management-400"
        )}>
            <Icon strokeWidth={1.5} className="w-7 h-7" />
        </Link>
    )
}
