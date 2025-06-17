import React from 'react';
import Navbar from '../shared/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../shared/Footer';
import { Helmet } from 'react-helmet-async';
const About = () => {
    return (
        <div>
            <Helmet>
                <title>About As</title>
            </Helmet>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-300 my-5">
                    <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
                        About Course Management
                    </h1>
                    <div className="space-y-10 text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
                        {/* Mission */}
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Mission</h2>
                            <p>
                                Our mission is to make learning and teaching more organized, accessible, and efficient.
                                We aim to provide a platform where educators can easily manage their courses, and learners
                                can explore, enroll, and track their educational journey with ease.
                            </p>
                        </div>
                        {/* Vision */}
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Vision</h2>
                            <p>
                                To be the leading platform for managing online and offline education,
                                promoting lifelong learning and professional growth through technology.
                            </p>
                        </div>
                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Key Features</h2>
                            <ul className="list-disc list-inside space-y-2 marker:text-indigo-700 dark:marker:text-indigo-400">
                                <li>Browse and search a wide range of curated courses</li>
                                <li>Easy course creation and management tools for instructors</li>
                                <li>Secure user authentication and personalized dashboards</li>
                                <li>Enrollment tracking with real-time updates</li>
                                <li>Dark mode support and mobile-friendly design</li>
                            </ul>
                        </div>
                        {/* Our Team */}
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Our Team</h2>
                            <p>
                                We are a team of dedicated developers and educators committed to
                                improving access to quality education through a streamlined course management system.
                            </p>
                        </div>
                        {/* Why Choose Us */}
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">Why Choose Course Management?</h2>
                            <p>
                                Unlike generic learning platforms, our system is focused on course management for both
                                instructors and learners — offering intuitive tools, seamless interactions,
                                and a commitment to enhancing the learning experience.
                            </p>
                        </div>
                    </div>
                    <Link to='/' className='px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden'>Back To Home</Link>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};
export default About;