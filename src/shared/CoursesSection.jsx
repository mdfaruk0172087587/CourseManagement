import React from 'react';
import Courses from './Courses';

const CoursesSection = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Latest Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            data.map(course => <Courses key={course._id} course={course}></Courses>)
        }
      </div>
    </div>
  );
};

export default CoursesSection;
