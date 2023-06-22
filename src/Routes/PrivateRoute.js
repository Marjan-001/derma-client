import React, { useContext } from 'react';
import { AuthContext } from '../pages/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
   
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
   return <div className="w-16 h-16 mx-auto items-center  border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
}
    if (user) {
        return children;
    }
    return <Navigate to ='/login' state={{from:location} } replace></Navigate>
};

export default PrivateRoute;