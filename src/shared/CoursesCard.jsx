import React from 'react';
import { Link } from 'react-router';
const CoursesCard = ({ item }) => {
  const { image, title, instructorName, duration, createdAt, enrollCount } = item;
  return (
    <div className="card bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img src={image} alt={title} className="h-56 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
                <p className="text-sm text-gray-600">Enroll Count: {enrollCount}</p>

        <p className="text-sm text-gray-500">
          Added on: {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600">Instructor: {instructorName}</p>
        <p className="text-sm text-gray-600">Duration: {duration}</p>
        <div className="card-actions justify-end mt-4">
        </div>
        <Link to='/' className='px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden'>Back To Home</Link>
      </div>
    </div>
  );
};
export default CoursesCard;