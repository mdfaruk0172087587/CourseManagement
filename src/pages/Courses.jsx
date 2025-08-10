import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from '../shared/CoursesCard';
import { Helmet } from 'react-helmet-async';
import { FaBookOpen } from 'react-icons/fa';
const Courses = () => {
  const course = useLoaderData();
  return (
    <div className="max-w-[96%] mx-auto px-4 py-10">
      <Helmet>
        <title>All Courses</title>
      </Helmet>
       <h2 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-medium text-center mb-3 ">
        <FaBookOpen className="text-indigo-600" />
        All Courses
      </h2>
      <p className="text-center mb-10 max-w-3xl mx-auto">
        Browse through our comprehensive list of courses designed to enhance your skills 
        and open new opportunities. Whether you’re a beginner or advanced learner, find the perfect course for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          course.map(item => <CoursesCard key={item._id} item={item}></CoursesCard>)
        }
      </div>
    </div>
  );
};
export default Courses;