import axios from 'axios';
import React from 'react';
import UseHock from '../hock/UseHock';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
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
    axios.post('https://assignment-11-server-theta-ecru.vercel.app/courses', newPost)
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
    <div className="card bg-base-100 mx-auto my-5 w-full max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Add Course</title>
      </Helmet>
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Add Course</h1>
        <form onSubmit={handleAddCourse} className="fieldset">
          <label className="label">Course Title</label>
          <input type="text" name='title' required className="input" placeholder="Title" />
          <label className="label">Description</label>
          <input type="text" name='description' required className="input" placeholder="Description" />
          <label className="label">Image URL</label>
          <input type="url" name='image' required className="input" placeholder="url" />
          <label className="label">Duration</label>
          <input type="text" name='duration' required className="input" placeholder="Duration" />
          <button type='submit' className="btn btn-neutral mt-4">Add</button>
        </form>
        <Link to='/' className='px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden'>Back To Home</Link>
      </div>
    </div>
  );
};
export default AddCourse;