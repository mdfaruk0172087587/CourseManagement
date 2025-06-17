import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const Edit = () => {
    const { id } = useParams();
    const {title, image, duration, description} = useLoaderData();
    
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
        <div className="card bg-base-100 mx-auto my-5 w-full max-w-sm shrink-0 shadow-2xl">
            <Helmet>
                <title>Update Page</title>
            </Helmet>
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Edit Course</h1>

                <form onSubmit={handleEdit} className="fieldset">
                    <label className="label">Course Title</label>
                    <input defaultValue={title} type="text" name='title' required className="input" placeholder="Title" />

                    <label className="label">Description</label>
                    <input defaultValue={description} type="text" name='description' required className="input" placeholder="Description" />

                    <label className="label">Image URL</label>
                    <input defaultValue={image} type="url" name='image' required className="input" placeholder="url" />

                    <label className="label">Duration</label>
                    <input defaultValue={duration} type="text" name='duration' required className="input" placeholder="Duration" />

                    <button type='submit' className="btn btn-neutral mt-4">Edit</button>
                </form>
            </div>
        </div>

    );
};

export default Edit;