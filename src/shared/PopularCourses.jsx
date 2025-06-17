import React, { use } from 'react';
import Popular from './Popular';

const PopularCourses = ({ popularPromise }) => {
  const popular = use(popularPromise)
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Popular Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          popular.map(item => <Popular key={item._id} item={item}></Popular>)
        }
      </div>
    </div>
  );
};

export default PopularCourses;