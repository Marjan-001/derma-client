import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../customHooks/useAdmin';
import { AuthContext } from '../../pages/context/AuthProvider';

const AdminRoute = ({children}) => {
   
   
    const { user } = useContext(AuthContext)
    const [isAdmin,setIsAdminLoading]=useAdmin(user?.email)
    const location = useLocation();
    if (setIsAdminLoading) {
   return <div className="w-16 h-16 mx-auto items-center  border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
}
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to ='/login' state={{from:location} } replace></Navigate>
};

export default AdminRoute;