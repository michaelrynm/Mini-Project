import { createBrowserRouter, RouterProvider, Navigate, redirectDocument } from "react-router-dom";

import Landingpage from "../pages/landingpage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landingpage/>,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "register",
            element: <Register />,
        },
        {
            path: "*",
            element: <div>404 Not Found</div>
        }
    ]);
    return <RouterProvider router={router} />
}