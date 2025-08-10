import React from 'react';
import Navbar from '../shared/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../shared/Footer';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaBullseye, FaCheckCircle, FaEye, FaListUl, FaUsers } from 'react-icons/fa';
const About = () => {
    return (
      <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <section className="max-w-[93%] mx-auto px-6 dark:bg-gray-900 transition-colors duration-300 my-5">
          {/* About Title with Icon and Description */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-medium inline-flex items-center justify-center gap-3 mx-auto">
              <FaBook className="text-indigo-600" />
              About Course Management
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-lg leading-relaxed">
              Welcome to our Course Management platform, designed to empower educators and learners alike. 
              We provide a seamless environment for creating, managing, and discovering courses that foster growth and learning.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-5 leading-relaxed text-lg">
            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-indigo-700 inline-flex items-center gap-2">
                <FaBullseye className="text-indigo-500" />
                Our Mission
              </h2>
              <p>
                Our mission is to make learning and teaching more organized, accessible, and efficient.
                We aim to provide a platform where educators can easily manage their courses, and learners
                can explore, enroll, and track their educational journey with ease.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400 inline-flex items-center gap-2">
                <FaEye className="text-indigo-500" />
                Our Vision
              </h2>
              <p>
                To be the leading platform for managing online and offline education,
                promoting lifelong learning and professional growth through technology.
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400 inline-flex items-center gap-2">
                <FaListUl className="text-indigo-500" />
                Key Features
              </h2>
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
              <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400 inline-flex items-center gap-2">
                <FaUsers className="text-indigo-500" />
                Our Team
              </h2>
              <p>
                We are a team of dedicated developers and educators committed to
                improving access to quality education through a streamlined course management system.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-indigo-400 inline-flex items-center gap-2">
                <FaCheckCircle className="text-indigo-500" />
                Why Choose Course Management?
              </h2>
              <p>
                Unlike generic learning platforms, our system is focused on course management for both
                instructors and learners — offering intuitive tools, seamless interactions,
                and a commitment to enhancing the learning experience.
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-6 block lg:hidden text-center"
          >
            Back To Home
          </Link>
        </section>
      </main>

      <Footer />
    </div>
    );
};
export default About;