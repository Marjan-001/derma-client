import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';

import { Outlet } from 'react-router-dom';
import { AuthContext } from '../pages/context/AuthProvider';
import { AiOutlineUser } from 'react-icons/ai';

const DashboardLayout = () => {
    const {user}= useContext(AuthContext)
    return (
        <>
            <Navbar></Navbar>
<div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
   
                        <li>
 <div className="avatar">
  <div className="w-10 rounded-full">
   {
    user?.photoURL?
        <img src={user.photoURL} />
        : <AiOutlineUser className='bg-blue-500 w-10 h-10 '></AiOutlineUser>

   }
  </div>
  <p className='font-semibold'>{user.displayName}</p>
</div>
                        </li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </>
    );
};

export default DashboardLayout;