import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { PiEyesFill } from 'react-icons/pi';
import { LiaEyeSlash } from 'react-icons/lia';
import AuthLottie from '../assets/AuthLottie.json'
import UseHock from '../hock/UseHock';
const Register = () => {
  const { register, userUpdateProfile, setUser, setLoading, googleLogin, githubLogin } = UseHock();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const emailName = email.split('@')[0];
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,}$/;
    register(email, password)
      .then((result) => {
        if (!passwordValid.test(password)) {
          return Swal.fire({
            position: 'top-end',
            icon: 'error',
            title:
              'পাসওয়ার্ডে ১টি বড় হাতের, ১টি ছোট হাতের, ১টি সংখ্যা এবং ১টি বিশেষ চিহ্ন (!@#$%) থাকতে হবে এবং কমপক্ষে ৮ অক্ষরের হতে হবে।',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (password !== confirmPassword) {
          return Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না।',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (password.includes(emailName)) {
          return Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'পাসওয়ার্ডে ইমেইলের অংশ (username) থাকা চলবে না।',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        const userUpdate = result.user;
        userUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userUpdate, displayName: name, photoURL: photo });
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Register has been Success!',
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false)
        navigate('/');
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
  };
  // handle google login
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
        navigate('/');
      })
      .catch(error => {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true
        });
      });
  };
  // handleGithubLogin
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Github Login Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
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
    <div>
      <div className="min-h-screen flex flex-col font-sans ">
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            <div className="w-full max-w-sm">
              <Link to='/'>
                <div>
                  <img className='w-10 rounded-full mx-auto' src="/logo.jpg" alt="" />
                </div>
              </Link>
              <h2 className="text-3xl font-medium text-center  text-gray-900 mb-6">Welcome back</h2>
              {/* main part */}
              <div className='space-y-4'>
                <Helmet>
                  <title>Register Page</title>
                </Helmet>
                <form className="" onSubmit={handleRegister} >
                  {/* name */}
                  <div>
                    <label className="label block mb-1 text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Name"
                    />
                  </div>
                  {/* email */}
                  <div>
                    <label className="label block mb-1 text-sm font-medium text-gray-700"> Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Email"
                    />
                  </div>
                  {/* photo */}
                  <div>
                    <label className="label block mb-1 text-sm font-medium text-gray-700">Photo URL</label>
                    <input
                      type="url"
                      name="photo"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Photo URL"
                    />
                  </div>
                  {/* password */}
                  <div className='relative'>
                    <label className="label block mb-1 text-sm font-medium text-gray-700">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      className="input  w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type='button'
                    className="absolute right-[15%] bottom-[9.5%] md:right-[58%] lg:bottom-[28%] lg:right-[63%] z-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setShowPassword(!showPassword)}>
                    {
                      showPassword ? <PiEyesFill size={23} /> : <LiaEyeSlash size={23}></LiaEyeSlash>
                    }
                  </button>

                  {/* conf pass */}
                  <div>
                    <label className="label  block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      className="input  w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <button
                    type='button'
                    className="absolute right-[15%] -bottom-[3.5%] md:right-[58%] lg:bottom-[18%] lg:right-[63%] z-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {
                      showConfirmPassword ? <PiEyesFill size={23} /> : <LiaEyeSlash size={23}></LiaEyeSlash>
                    }
                  </button>

                  <button
                    type="submit"
                    className="w-full bg-purple-700 text-white mt-2 py-2 rounded-md hover:bg-purple-800 transition font-medium"
                  >
                    Register
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
                {/* github login */}
                <button onClick={handleGithubLogin} className="btn w-full bg-black text-white border-black">
                  <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                  Login with GitHub
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex w-1/2 bg-purple-100 justify-center items-center p-8">
            <Lottie animationData={AuthLottie} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Register;
