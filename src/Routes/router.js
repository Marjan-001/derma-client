import { createBrowserRouter } from "react-router-dom";
import Main from "../Layhout/Main";
import Home from "../pages/Home/Home";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layhout/DashboardLayout";
import MyAppointment from "../pages/Dashboard/MyAppointment";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../pages/Dashboard/AddDoctor";


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

                path: '/signup',
                element:<SignUp/> 
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment /></PrivateRoute>
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor/></AdminRoute>
            }
        ]
    }

])