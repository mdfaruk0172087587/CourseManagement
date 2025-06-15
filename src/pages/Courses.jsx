import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from '../shared/CoursesCard';
import { Helmet } from 'react-helmet-async';

const Courses = () => {
    const course = useLoaderData();
   
    return (
       <div className="max-w-7xl mx-auto px-4 py-10">
        <Helmet>
            <title>All Courses</title>
        </Helmet>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
       All Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            course.map(item => <CoursesCard key={item._id} item={item}></CoursesCard>)
        }
      </div>
    </div>
    );
};

export default Courses;