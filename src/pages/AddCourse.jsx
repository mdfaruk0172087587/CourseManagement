import axios from 'axios';
import React from 'react';
import UseHock from '../hock/UseHock';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaAlignLeft, FaArrowLeft, FaBookOpen, FaClock, FaEnvelope, FaImage, FaInfoCircle, FaPlusCircle, FaUser } from 'react-icons/fa';
const AddCourse = () => {
  const { user } = UseHock();
  // handleAddCourse
  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const Data = Object.fromEntries(formData.entries())
    const newPost = { ...Data, instructorName: user?.displayName, instructorEmail: user?.email, createdAt: new Date().toISOString() }
    // post
    axios.post('http://localhost:3000/courses', newPost)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Add Course Has Been Successfully Saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
        form.reset()
      })
      .catch(error => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500
        });
      })
  }
  return (
       <div className="max-w-6xl mx-auto my-10 px-4">
      <Helmet>
        <title>Add Course</title>
      </Helmet>

      {/* Title & Description */}
      <div className="text-center">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaBookOpen className="text-indigo-600" />
          Add Course
        </h1>
        <p className=" dark:text-gray-400 max-w-2xl mx-auto mt-3 leading-relaxed flex items-center justify-center gap-2">
          <FaInfoCircle className="text-indigo-500" />
          Upload your course details below. Make sure all information is
          accurate and descriptive to attract learners.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start dark:bg-gray-900  dark:text-gray-100 p-6 transition-colors duration-300 rounded-lg shadow-md mt-6">
        {/* Left Side Info */}
        <div>
          {/* Helpful Tips */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaInfoCircle className="text-indigo-500" />
              Helpful Tips
            </h2>
            <p className="flex items-center gap-2">
              <FaInfoCircle className="text-indigo-500" /> Keep your title short
              & clear.
            </p>
            <p className="flex items-center gap-2">
              <FaInfoCircle className="text-indigo-500" /> Use a high-quality
              image URL.
            </p>
            <p className="flex items-center gap-2">
              <FaInfoCircle className="text-indigo-500" /> Mention accurate
              course duration.
            </p>
          </div>

          {/* Editor Info */}
          <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 mt-8">
            <FaUser className="text-blue-500" /> User Info
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 mt-4">
            <img
              src={user?.photoURL}
              alt="Editor"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center text-primary md:justify-start gap-2 mb-1">
                <FaUser className="text-blue-500" /> {user?.displayName}
              </h3>
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <FaEnvelope /> {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <form onSubmit={handleAddCourse} className="space-y-5">
            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaBookOpen className="text-indigo-500" /> Course Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="input input-bordered w-full"
                placeholder="Title"
              />
            </div>
            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaAlignLeft className="text-indigo-500" /> Description
              </label>
              <input
                type="text"
                name="description"
                required
                className="input input-bordered w-full"
                placeholder="Description"
              />
            </div>

            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaImage className="text-indigo-500" /> Image URL
              </label>
              <input
                type="url"
                name="image"
                required
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaClock className="text-indigo-500" /> Duration
              </label>
              <input
                type="text"
                name="duration"
                required
                className="input input-bordered w-full"
                placeholder="e.g. 4 weeks"
              />
            </div>

            {/* Add Button */}
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaPlusCircle /> Add Course
            </button>
          </form>

          {/* Back Button */}
          <Link
            to="/"
            className="px-4 py-2 btn rounded-md dark:text-gray-200 mt-3 block lg:hidden flex items-center justify-center gap-2 hover:bg-blue-700 text-white bg-blue-500 dark:hover:bg-blue-600 transition-colors border-none"
          >
            <FaArrowLeft /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AddCourse;