import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAlignLeft, FaBookOpen, FaClock, FaEdit, FaEnvelope, FaImage, FaInfoCircle, FaUser } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';
import UseHock from '../hock/UseHock';
const Edit = () => {
    const { id } = useParams();
    const {user} = UseHock();
    const { title, image, duration, description } = useLoaderData();
    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // update
        axios.put(`https://assignment-11-server-theta-ecru.vercel.app/courses/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    // update success
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully Saved !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
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
        <title>Update Page</title>
      </Helmet>

      {/* Title & Description Center */}
      <div className="text-center">
        <h1 className="text-3xl font-medium flex items-center justify-center gap-2">
          <FaBookOpen className="text-indigo-600" />
          Edit Course
        </h1>
        <p className=" max-w-2xl mx-auto mt-3 leading-relaxed">
          Update your course details below. Make sure all information is accurate and descriptive 
          to attract learners.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start dark:bg-gray-900 p-6  transition-colors duration-300">
        
        {/* Left Side Info */}
        <div className='justify-center'>
            <div className="space-y-3 ">
          <h2 className="text-xl font-semibold">Helpful Tips</h2>
          <p className="flex items-center gap-2">
            <FaInfoCircle className="text-indigo-500" /> Keep your title short & clear.
          </p>
          <p className="flex items-center gap-2">
            <FaInfoCircle className="text-indigo-500" /> Use a high-quality image URL.
          </p>
          <p className="flex items-center gap-2">
            <FaInfoCircle className="text-indigo-500" /> Mention accurate course duration.
          </p>
        </div>
         {/* editor */}
            <h1 className='text-3xl font-medium flex items-center justify-center gap-2 mt-5'>  <FaEdit />Editor Info</h1>
           
             <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
                <img
                    src={user?.photoURL}
                    alt="Editor"
                    className="w-24 h-24 rounded-full border-4 border-blue-500"
                />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3 mb-1 text-primary">
                        <FaUser className="text-blue-500" /> {user?.displayName}
                    </h2>
                    <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-3">
                        <FaEnvelope /> {user?.email}
                    </p>
                </div>
            </div>
            
        </div>

        {/* Right Side Form */}
        <div>
          <form onSubmit={handleEdit} className="space-y-5">
            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaBookOpen className="text-indigo-500" /> Course Title
              </label>
              <input
                defaultValue={title}
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
                defaultValue={description}
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
                defaultValue={image}
                type="url"
                name="image"
                required
                className="input input-bordered w-full"
                placeholder="URL"
              />
            </div>

            <div>
              <label className="label flex items-center gap-2 font-semibold">
                <FaClock className="text-indigo-500" /> Duration
              </label>
              <input
                defaultValue={duration}
                type="text"
                name="duration"
                required
                className="input input-bordered w-full"
                placeholder="Duration"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaEdit /> Edit
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};
export default Edit;