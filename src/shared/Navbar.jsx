import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links = <>
     <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-amber-300': ''}>Home</NavLink></li>
     <li><NavLink to='/courses' className={({isActive}) => isActive ? 'bg-amber-300' : ''}>Courses</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Links}
        
      </ul>
    </div>
    <a className=" text-xl">Course Management 
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn btn-primary mr-3'>Login</Link>
    <Link to='/register' className='btn btn-primary'>Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;