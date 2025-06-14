import React, { useState } from 'react';
import { LiaEyeSlash } from 'react-icons/lia';
import { PiEyesFill } from 'react-icons/pi';
import UseHock from '../hock/UseHock';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { login } = UseHock();
    const navigate = useNavigate();
    //  handle login
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // login
        login(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Login Successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
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
    return (


        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5 mx-auto">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login now!</h1>

                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' required placeholder="Email" />
                    <label className="label relative ">Password</label>
                    <input type={showPassword ? 'text' : 'password'} required name='password' className="input " placeholder="Password" />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-14 bottom-24 z-10'> {
                        showPassword ? <PiEyesFill size={23} />
                            : <LiaEyeSlash size={23} />
                    }
                    </button>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>


    );
};

export default Login;