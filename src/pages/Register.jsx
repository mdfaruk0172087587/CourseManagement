import Swal from 'sweetalert2';
import UseHock from '../hock/UseHock';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import registerLottie from '../assets/register.json'
import { useState } from 'react';
import { PiEyesFill } from 'react-icons/pi';
import { LiaEyeSlash } from 'react-icons/lia';

const Register = () => {
  const { register, userUpdateProfile, setUser, setLoading } = UseHock();
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
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie style={{width: '250px'}} animationData={registerLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full max-w-sm flex justify-center shrink-0 shadow-2xl my-5 mx-auto transition-colors duration-300">
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Email"
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photo"
            className="input bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Photo URL"
          />

          <label className="label">Password</label>
          <input
            type= {showPassword ? 'text' : 'password'}
            name="password"
            required
            className="input bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Password"
          />
          <button
           type='button'
            className="absolute right-8 lg:right-12 bottom-42 z-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={() => setShowPassword(!showPassword)}>
               {
                showPassword ?  <PiEyesFill size={23} /> : <LiaEyeSlash size={23}></LiaEyeSlash>
               }
                </button>
          <label className="label">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            required
            className="input bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Confirm Password"
          />
          <button
           type='button'
            className="absolute right-8 lg:right-12 bottom-25 z-10 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
               {
                showConfirmPassword ?  <PiEyesFill size={23} /> : <LiaEyeSlash size={23}></LiaEyeSlash>
               }
                </button>
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;
