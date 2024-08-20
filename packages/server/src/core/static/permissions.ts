export const TaskPermissons = {
    superUser: [
        "create_user", "delete_user", "view_user", "update_user",
        "create_task", "delete_task", "view_task", "update_task",
        "create_role", "delete_role", "view_role", "update_role",
        "create_permission", "delete_permission", "view_permission", "update_permission",
    ],
    admin: [
        "create_user", "view_user",
        "create_task", "delete_task", "view_task", "update_task",
    ],
    member: [
        "create_task", "delete_task", "view_task", "update_task",
    ]
}