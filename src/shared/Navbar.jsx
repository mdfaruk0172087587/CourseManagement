import React from 'react';
import { Link, NavLink } from 'react-router';
import UseHock from '../hock/UseHock';
import Swal from 'sweetalert2';
import ThemeToggle from '../router/ThemeToggle';
const Navbar = () => {
  const { user, logOut } = UseHock();
  const Links = user ? (
    <>
      <li>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/courses' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink to='/addCourse' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          Add Courses
        </NavLink>
      </li>
      <li>
        <NavLink to='/manageCourses' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          Manage Courses
        </NavLink>
      </li>
      <li>
        <NavLink to='/myEnrollCourse' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          My Enroll Courses
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          About
        </NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/courses' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'bg-amber-300' : '')}>
          About
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Log Out Successfully!',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };
  return (
    <div className="navbar bg-white dark:bg-gray-900 shadow-sm px-5 md:px-10">
      <div className="navbar-start flex items-center">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-700 dark:stroke-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box mt-3 w-52 p-2 shadow-lg z-50 text-gray-900 dark:text-gray-100"
          >
            {Links}
          </ul>
        </div>
        {/* Logo and Project Name - medium+ screens */}
        <Link to='/' className="flex md:hidden items-center space-x-2 ml-2">
          <img src="/logo.jpg" alt="Logo" className="w-8 h-8" />
        </Link>
        <Link to='/' className="hidden md:flex items-center space-x-3 ml-2">
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-medium text-blue-600 dark:text-blue-400">
            Course Management
          </span>
        </Link>
      </div>
      {/* Links - large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-900 dark:text-gray-100">{Links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-3">
        {/* Theme toggle */}
        <ThemeToggle />

        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                    title={user.displayName || ''}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48 space-y-2">
                <li className="text-sm text-gray-600 font-semibold pointer-events-none">👤 {user?.displayName}</li>

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-primary bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-none"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </>
        )
          :
          (
            <>
              <Link to='/login' className='btn btn-primary bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-none'>Join Us</Link>
            </>
          )}
      </div>
    </div>
  );
};

export default Navbar;
