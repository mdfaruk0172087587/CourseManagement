import React, { useEffect, useState, useRef } from 'react';
import CoursesCard from '../shared/CoursesCard';
import { Helmet } from 'react-helmet-async';
import { FaBookOpen } from 'react-icons/fa';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [sortByEnroll, setSortByEnroll] = useState(false);
  const debounceTimeout = useRef(null);

  const fetchCourses = async (title, sortDesc) => {
    try {
      const queryParams = new URLSearchParams();
      if (title) queryParams.append('title', title);
      if (sortDesc) queryParams.append('sort', 'desc');

      const res = await fetch(`http://localhost:3000/allCourses?${queryParams.toString()}`);
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      fetchCourses(searchTitle, sortByEnroll);
    }, 500);

    return () => clearTimeout(debounceTimeout.current);
  }, [searchTitle, sortByEnroll]);

  // সার্চ বক্স চেঞ্জ হ্যান্ডলার
  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  // enrollCount অনুসারে sort বাটন ক্লিক হ্যান্ডলার
  const toggleSortByEnroll = () => {
    setSortByEnroll(prev => !prev);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTitle('');
    setSortByEnroll(false);
  };

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

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={handleSearchChange}
          className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
        />

        <button
          onClick={toggleSortByEnroll}
          className={`px-4 py-2 rounded-lg focus:outline-none transition ${
            sortByEnroll
              ? 'bg-indigo-600  hover:bg-indigo-700'
              : ' bg-indigo-600  hover:bg-indigo-700'
          }`}
          type="button"
        >
          {sortByEnroll ? 'Showing: EnrollCount ↓' : 'Sort by Enroll Count'}
        </button>

        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          type="button"
        >
          Clear
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((item) => (
          <CoursesCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
