import { createBrowserRouter } from "react-router-dom";
import Home from "./app/pages/private/Home";
import RootLayout from "./app/pages/private/Layout";
import PublicLayout from "./app/pages/PublicLayout";
import SignIn from "./app/pages/SignIn";

export const Routers = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />
            }
        ]
    },
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])