import React from 'react';
import { Link } from 'react-router';
const Courses = ({ course }) => {
  const { image, title, instructorName, _id } = course;
  return (
    <div className="card bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
       
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Instructor: {instructorName}
        </p>
        
        <div className="card-actions justify-end mt-4 border-none">
          <Link to={`/courseDetails/${_id}`}>
            <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors border-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Courses;
