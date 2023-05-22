import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assests/images/DerMa__1_-removebg-preview.png'

const Navbar = () => {


    const navItems = <>

        <li>
            <a className='px-4 -mb-1 border-b-2 hover:border-blue-400 hover:bg-blue-200    text-black '>About</a>

        </li>

        <li>
            <a className='px-4 -mb-1 border-b-2 hover:border-blue-400  hover:bg-blue-200   text-black '>Contact</a>
        </li>
        <li>
            <a className='px-4 -mb-1 border-b-2 hover:border-blue-400  hover:bg-blue-200   text-black '>Treatment</a>
        </li>
        <li>
            <Link to="/appointment" className='px-4 -mb-1 border-b-2 hover:border-blue-400  hover:bg-blue-200   text-black '>Appointment</Link>
        </li>




        <li >
            <a href="#" className=" px-8 py-3 rounded  hover:bg-blue-200 text-blueborder-blue-400" >Sign in</a>
        </li>




    </>
    return (


        <div className="navbar  bg-white py-4 text-black justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact bg-blue-200 dropdown-content mt-3 p-2 shadow rounded-box w-52">

                        {navItems}

                    </ul>
                </div>
                <Link to='/'>
                    <h1 className='text-2xl lg:text-4xl  text-blue-400 font-extrabold'>Derma</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal   items-stretch  space-x-3">
                    {navItems}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;