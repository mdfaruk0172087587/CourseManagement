import React from 'react';

const Popular = ({ item }) => {
    const { image, title, instructorName, duration, _id, createdAt, enrollCount } = item;
    return (
        <div className="card  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure>
                <img src={image} alt={title} className="h-56 w-full object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-900 dark:text-white">{title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Added on: {new Date(createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Instructor: {instructorName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Duration: {duration}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Enroll Count: {enrollCount}
                </p>
            </div>
        </div>
    );
};

export default Popular;
