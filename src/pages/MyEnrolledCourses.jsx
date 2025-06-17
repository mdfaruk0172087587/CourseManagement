import React, { useEffect, useState } from 'react';
import UseHock from '../hock/UseHock';
import { Helmet } from 'react-helmet-async';
import MyEnrollCard from '../shared/MyEnrollCard';

const MyEnrolledCourses = () => {
  const { user } = UseHock();
  const [myEnrollCourse, setMyEnrollCourse] = useState([]);
console.log(user.accessToken)
  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-11-server-theta-ecru.vercel.app/myEnrolledCourses?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`
        }
      })
        .then((res) => res.json())
        .then((data) => setMyEnrollCourse(data));
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md shadow-md">
      <Helmet>
        <title>My Enroll Course</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">My Enroll Courses</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <tr>
              <th className="border-b border-gray-300 dark:border-gray-700">Title</th>
              <th className="border-b border-gray-300 dark:border-gray-700">Short Description</th>
              <th className="border-b border-gray-300 dark:border-gray-700  hidden md:table-cell">Duration</th>
              <th className="border-b border-gray-300 dark:border-gray-700">Actions</th>
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
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  You haven't enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
