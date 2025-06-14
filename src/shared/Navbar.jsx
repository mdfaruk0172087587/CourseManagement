import React from 'react';
import { Link, NavLink } from 'react-router';
import UseHock from '../hock/UseHock';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = UseHock();
  
  const Links = <>
    <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-amber-300' : ''}>Home</NavLink></li>
    <li><NavLink to='/courses' className={({ isActive }) => isActive ? 'bg-amber-300' : ''}>Courses</NavLink></li>
  </>

  // handle log out
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // logOut
        logOut()
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Log Out Successfully!",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(error => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            });
          })

      }
    });
  }
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
          {
            user ? <>
              <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
              <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
            </>
              :
              <>
                <Link to='/login' className='btn btn-primary mr-3'>Login</Link>
                <Link to='/register' className='btn btn-primary'>Register</Link>
              </>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;