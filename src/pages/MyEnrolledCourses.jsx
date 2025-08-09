import React, { useEffect, useState } from 'react';
import UseHock from '../hock/UseHock';
import { Helmet } from 'react-helmet-async';
import MyEnrollCard from '../shared/MyEnrollCard';
import { Link } from 'react-router';
import { FaArrowLeft, FaBookOpen, FaClock, FaInfoCircle } from 'react-icons/fa';
const MyEnrolledCourses = () => {
  const { user } = UseHock();
  const [myEnrollCourse, setMyEnrollCourse] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myEnrolledCourses?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`
        }
      })
        .then((res) => res.json())
        .then((data) => setMyEnrollCourse(data));
    }
  }, [user]);
  return (
   <div className="max-w-[93%] mx-auto px-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 my-10">
      <Helmet>
        <title>My Enroll Course</title>
      </Helmet>

      {/* Title & Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 text-primary">
          <FaBookOpen className="text-indigo-600" />
          My Enroll Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base flex items-center justify-center gap-2">
          <FaInfoCircle className="text-indigo-500" />
          Here you can view and manage all the courses you have enrolled in. 
          Keep track of your learning journey and take action when needed.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="table w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <tr>
              <th className="border-b border-gray-300 dark:border-gray-700">
                <FaBookOpen className="inline text-indigo-500 mr-1" /> Title
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700">
                <FaInfoCircle className="inline text-indigo-500 mr-1" /> Short Description
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700 hidden md:table-cell">
                <FaClock className="inline text-indigo-500 mr-1" /> Duration
              </th>
              <th className="border-b border-gray-300 dark:border-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {myEnrollCourse.map((enroll) => (
              <MyEnrollCard
                key={enroll._id}
                enroll={enroll}
                myEnrollCourse={myEnrollCourse}
                setMyEnrollCourse={setMyEnrollCourse}
              />
            ))}
            {myEnrollCourse.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-400">
                  You haven't enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden flex items-center justify-center gap-2"
      >
        <FaArrowLeft /> Back To Home
      </Link>
    </div>
  );
};
export default MyEnrolledCourses;
