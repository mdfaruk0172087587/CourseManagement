import React, { use } from 'react';
import Popular from './Popular';
import { FaStar } from 'react-icons/fa';

const PopularCourses = ({ popularPromise }) => {
  const popular = use(popularPromise)
  return (
    <div className="max-w-[96%] mx-auto px-4 py-10">
      <h2 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-medium text-center mb-2 text-primary">
        <FaStar className="text-yellow-500" />
        Popular Courses
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover our most popular courses, highly rated by learners worldwide. 
        Each course offers hands-on projects, expert guidance, and the latest industry knowledge.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          popular.map(item => <Popular key={item._id} item={item}></Popular>)
        }
      </div>
    </div>
  );
};

export default PopularCourses;