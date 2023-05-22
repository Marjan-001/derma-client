import { createBrowserRouter } from "react-router-dom";
import Main from "../Layhout/Main";
import Home from "../pages/Home/Home";
import Appointment from "../pages/Appointment/Appointment/Appointment";


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
                path: '/appointment',
                element: <Appointment />
            }
        ]

    }

])