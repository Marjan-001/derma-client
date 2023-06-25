import React from 'react';
import Navbar from '../Shared/Navbar';

import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
   
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </>
    );
};

export default DashboardLayout;