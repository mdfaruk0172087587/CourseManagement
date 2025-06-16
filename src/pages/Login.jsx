import React, { useState } from 'react';
import { LiaEyeSlash } from 'react-icons/lia';
import { PiEyesFill } from 'react-icons/pi';
import UseHock from '../hock/UseHock';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleLogin } = UseHock();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Login Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location.state || '/');
      })
      .catch(error => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Google Login Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location.state || '/');
      })
      .catch(error => {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true
        });
      });
  };

  return (
    <div className="card w-full max-w-sm mx-auto shadow-2xl my-5 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100
      transition-colors duration-300
    ">
      <Helmet>
        <title>Login Page</title>
      </Helmet>

      <div className="card-body">
        <h1 className="text-3xl text-center font-bold mb-6">Login now!</h1>

        <form onSubmit={handleLogin} className="relative">
          <label className="label">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Email" 
            className="input input-bordered w-full 
              bg-white dark:bg-gray-700 dark:text-gray-100 
              border-gray-300 dark:border-gray-600
              focus:border-blue-500 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700
              transition-colors duration-300
            " 
          />

          <label className="label relative mt-4">Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            required 
            placeholder="Password" 
            className="input input-bordered w-full 
              bg-white dark:bg-gray-700 dark:text-gray-100 
              border-gray-300 dark:border-gray-600
              focus:border-blue-500 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700
              transition-colors duration-300
            " 
          />

          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-4 top-[130px] z-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <PiEyesFill size={23} /> : <LiaEyeSlash size={23} />}
          </button>

          <button 
            type="submit" 
            className="btn btn-neutral mt-8 w-full"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <button 
          onClick={handleGoogleLogin} 
          className="btn mt-4 w-full 
            bg-white dark:bg-gray-700 
            text-black dark:text-white 
            border border-gray-300 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-600
            transition-colors duration-300
            flex items-center justify-center
          "
        >
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
