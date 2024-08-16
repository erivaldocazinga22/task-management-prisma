import { Cog8ToothIcon, BellIcon, RectangleStackIcon, UsersIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export const NAVLINK = [
    {
        label: "Tarefas",
        href: "/task",
        icon: RectangleStackIcon
    },
    {
        label: "Notificações",
        href: null,
        icon: BellIcon
    },
    {
        label: "Mensagens",
        href: "/",
        icon: ChatBubbleOvalLeftEllipsisIcon
    },
    {
        label: "Team",
        href: null,
        icon: UsersIcon
    },
    {
        label: "Definições",
        href: "/",
        icon: Cog8ToothIcon
    },
]