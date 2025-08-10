import React from 'react';
import Courses from './Courses';
const CoursesSection = ({ data }) => {
  return (
    <div className="max-w-[96%] mx-auto px-4 py-5">
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-2 dark:text-white">
        Latest Courses
      </h2>
     <p className="text-center dark:text-white mb-5 max-w-2xl mx-auto">
  Explore our latest courses designed to enhance your skills and knowledge. 
  Each course is carefully curated to provide practical learning and real-world application.
</p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          data.map(course => <Courses key={course._id} course={course}></Courses>)
        }
      </div>
    </div>
  );
};
export default CoursesSection;
