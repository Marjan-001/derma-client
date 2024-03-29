import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';

import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../pages/context/AuthProvider';
import { AiOutlineUser } from 'react-icons/ai';
import useAdmin from '../customHooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email)
  const [isAdmin] = useAdmin(user?.email)
  console.log(isAdmin)
  
    return (
        <>
            <Navbar></Navbar>
<div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side border border-blue-600 rounded-lg border-dashed">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-black hover:bg-blue-200">
   
 <li>
 <div className="avatar">
  <div className="w-10 rounded-full">
   {
    user?.photoURL?
        <img src={user.photoURL} />
        : <AiOutlineUser className='bg-blue-400 w-10 h-10 '></AiOutlineUser>

                    }
                    
  </div>
  <p className='font-semibold'>{user.displayName}</p>
</div>
</li>
      <li><Link to ='/dashboard'>My Appointments</Link></li>
             
              {
                isAdmin &&
                <>
                     <li><Link to='/dashboard/allusers'>All Users</Link></li>
                </>
              

              }
              {
                isAdmin &&
                <>
                     <li><Link to='/dashboard/adddoctor'>Add Dermatologist</Link></li>
                </>
              

              }
              {
                isAdmin &&
                <>
                     <li><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
                </>
              

              }

    </ul>
  
  </div>
</div>
        </>
    );
};

export default DashboardLayout;