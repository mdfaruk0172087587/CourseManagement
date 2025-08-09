import React, { useEffect, useState } from 'react';
import UseHock from '../hock/UseHock';
import Manage from '../shared/Manage';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { FaTasks } from 'react-icons/fa';
const ManageCourses = () => {
  const { user } = UseHock();
  const [manageCourse, setManageCourse] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/manageCourses?instructorEmail=${user.email}`, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`
        }
      })
        .then((res) => res.json())
        .then((data) => setManageCourse(data));
    }
  }, [user]);
  return (
    <div className="max-w-[93%] mx-auto px-4 py-8 transition-colors duration-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>Manage Course</title>
      </Helmet>

      {/* Title with icon and description */}
      <div className="text-center mb-6">
        <h1 className="inline-flex items-center justify-center gap-2 text-3xl font-medium">
          <FaTasks className="text-indigo-600" />
          Manage Your Courses
        </h1>
        <p className="max-w-xl mx-auto mt-2 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          Here you can view, edit, and delete the courses you have created. Manage your course listings easily and keep your content up to date.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <tr>
              <th className="border-b border-gray-300 dark:border-gray-700">Title</th>
              <th className="border-b border-gray-300 dark:border-gray-700">Short Description</th>
              <th className="border-b border-gray-300 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageCourse.map((manage) => (
              <Manage
                key={manage._id}
                manage={manage}
                setManageCourse={setManageCourse}
                manageCourse={manageCourse}
              />
            ))}
            {manageCourse.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  No courses added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Link
        to="/"
        className="px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden"
      >
        Back To Home
      </Link>
    </div>
  );
};
export default ManageCourses;
