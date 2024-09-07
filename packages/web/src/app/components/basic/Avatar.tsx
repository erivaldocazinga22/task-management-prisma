import { env } from "@/core/lib/env";
import { AvatarDemo, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/core/lib/utils";

type AvatarProps = {
    avatar_url: string;
    name: string;
    className?: React.AllHTMLAttributes<HTMLElement>["className"]
}

export const Avatar = ({ avatar_url, name, className }: AvatarProps) => {
    return (
        <div>
            <AvatarDemo className={cn("w-12 h-12 select-none", className)}>
                <AvatarImage src={`${env.VITE_BASE_URL}/storage/profile/${avatar_url}`} />
                <AvatarFallback className="dark:bg-neutral-800 bg-neutral-800">
                    {name.split(" ").map(word => word[0]).join("")}
                </AvatarFallback>
            </AvatarDemo>
        </div>
    )
}