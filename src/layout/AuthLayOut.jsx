import React from 'react';
import { Link, Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Lottie from 'lottie-react';
import AuthLottie from '../assets/AuthLottie.json'
const AuthLayOut = () => {
    return (
            <div className="min-h-screen flex flex-col font-sans ">
                {/* Navbar */}
                <header className='sticky top-0 z-50'>
                    <Navbar></Navbar>
                </header>
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
                           
                            <Outlet></Outlet>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:flex w-1/2 bg-purple-100 justify-center items-center p-8">
                       <Lottie animationData={AuthLottie} loop={true}></Lottie>
                    </div>
                </div>
                {/* Footer */}
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
    );
};

export default AuthLayOut;