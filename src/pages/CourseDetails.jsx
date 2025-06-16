import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import UseHock from '../hock/UseHock';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const CourseDetails = () => {
    const [enroll, setEnroll] = useState(false);
    const data = useLoaderData();
    const {
        title,
        image,
        duration,
        instructorName,
        instructorEmail,
        createdAt,
        description,
        _id,
        enrollCount,
    } = data;
    const [updateCount, setUpdateCount] = useState(enrollCount);
    const { user } = UseHock();

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`http://localhost:3000/enrollments?email=${user.email}`)
                .then((res) => {
                    const find = res.data.find((item) => item.enrollId === _id);
                    setEnroll(find);
                });
        }
    }, [user, _id]);

    const handleEnroll = () => {
        const email = user.email;
        const enrollId = _id;
        const enrollPost = { email, enrollId };

        const newCount = updateCount + 1;
        axios
            .put(`http://localhost:3000/courses/${_id}`, { enrollCount: newCount })
            .then((res) => {
                if (res.data.modifiedCount) {
                    setUpdateCount(newCount);
                }
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            });

        axios
            .post('http://localhost:3000/enrollments', enrollPost)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Enroll Successfully Save!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setEnroll(true);
                }
            })
            .catch((error) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-md mt-10 transition-colors duration-300">
            <Helmet>
                <title>Course Details</title>
            </Helmet>

            <img
                src={image}
                alt={title}
                className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
            />

            <h1 className="text-2xl sm:text-3xl font-bold mt-6 mb-3">{title}</h1>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200 text-sm sm:text-base mb-6">
                <p><strong>Duration:</strong> {duration}</p>
                <p><strong>Instructor:</strong> {instructorName}</p>
                <p><strong>Email:</strong> {instructorEmail}</p>
                <p><strong>Published on:</strong> {new Date(createdAt).toLocaleDateString()}</p>
                <p><strong>Enrolled:</strong> {updateCount} students</p>
            </div>

            <div className="flex justify-start">
                {user ? (
                    <button
  onClick={handleEnroll}
  disabled={enroll}
  className={`btn btn-primary transition-colors duration-300 ${
    enroll
      ? 'btn-disabled bg-gray-400 cursor-not-allowed text-white dark:bg-gray-600 dark:text-white'
      : 'text-white dark:text-white'
  }`}
>
  {enroll ? 'Enrolled' : 'Enroll Now'}
</button>


                ) : (
                    <button
  disabled
  className="btn btn-primary bg-gray-400 dark:bg-gray-700 text-white dark:text-white cursor-not-allowed"
>
  Please log in to enroll
</button>


                )}
            </div>
        </div>
    );
};

export default CourseDetails;
