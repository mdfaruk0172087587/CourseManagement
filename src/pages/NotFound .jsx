import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <img
                src="https://i.ibb.co/W4bscnsz/error2.webp"
                alt="Not Found"
                className="w-96 max-w-full mb-8"
            />
            <h1 className="text-6xl font-bold text-indigo-600">404</h1>
            <p className="text-2xl mt-4 text-gray-800 font-semibold">Page Not Found</p>
            <p className="text-gray-600 mt-2 mb-6">
                The page you are looking for might have been removed or never existed.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
