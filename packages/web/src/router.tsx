import { createBrowserRouter } from "react-router-dom";
import Home from "./app/pages/private/Home";
import RootLayout from "./app/pages/private/Layout";
import PublicLayout from "./app/pages/PublicLayout";
import SignIn from "./app/pages/SignIn";
import Messages from "./app/pages/private/Messages";
import Team from "./app/pages/private/Team";
import GlobalSettings from "./app/pages/private/Settings";
import AccountSettings from "./app/pages/private/Settings/Account";
import AddAccount from "./app/pages/AddAccount";

export const Routers = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/add-account",
                element: <AddAccount />
            },
        ]
    },
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/messages",
                element: <Messages />
            },
            {
                path: "/groups/all",
                element: <Team />
            },
            {
                path: "/settings",
                element: <GlobalSettings />
            },
            {
                path: "/account/settings",
                element: <AccountSettings />
            },
        ]
    }
])