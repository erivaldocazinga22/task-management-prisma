import { Cog8ToothIcon, BellIcon, RectangleStackIcon, UsersIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export const NAVLINK = [
    {
        label: "Tarefas",
        href: "/",
        icon: RectangleStackIcon
    },
    {
        label: "Mensagens",
        href: "/messages",
        icon: ChatBubbleOvalLeftEllipsisIcon
    },
    {
        label: "Notificações",
        href: null,
        icon: BellIcon
    },
    {
        label: "Team",
        href: "/groups/all",
        icon: UsersIcon
    },
    {
        label: "Definições",
        href: "/settings",
        icon: Cog8ToothIcon
    },
]