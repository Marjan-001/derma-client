import { createBrowserRouter } from "react-router-dom";
import Main from "../Layhout/Main";
import Home from "../pages/Home/Home";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([


    {
        path: '/',
        element: <Main />,
        children: [


            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]

    }

])