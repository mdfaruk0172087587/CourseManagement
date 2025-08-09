import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import UseHock from '../hock/UseHock';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const CourseDetails = () => {
    const [enroll, setEnroll] = useState(false);
    const [userEnrollments, setUserEnrollments] = useState([]);
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
        seat
    } = data;
    const [updateCount, setUpdateCount] = useState(enrollCount);
    const { user } = UseHock();
    const seatsLeft = seat - updateCount;
    // Fetch user's enrollment data
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/enrollments?email=${user.email}`)
                .then((res) => {
                    setUserEnrollments(res.data);
                    const found = res.data.find(item => item.enrollId === _id);
                    setEnroll(found);
                });
        }
    }, [user, _id]);
    const handleEnroll = async () => {
        const email = user.email;
        const enrollId = _id;
        const enrollPost = { email, enrollId };
        if (enroll) {
            // Unenroll Logic
            axios.delete(`http://localhost:3000/enrollments?email=${email}&enrollId=${enrollId}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        setEnroll(false);
                        setUpdateCount(updateCount - 1);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You have successfully unenrolled!',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        axios.put(`http://localhost:3000/courses/${_id}`, { enrollCount: updateCount - 1 });
                        setUserEnrollments(userEnrollments.filter(item => item.enrollId !== enrollId));
                    }
                });
        } else {
            // Check if user already enrolled in 3 courses
            if (userEnrollments.length >= 3) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'You can enroll in a maximum of 3 courses at the same time.',
                    showConfirmButton: false,
                    timer: 2000,
                });
                return;
            }
            if (seatsLeft <= 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Sorry! There are no seats left in this course',
                    showConfirmButton: false,
                    timer: 2000,
                });
                return;
            }
            // Proceed to enroll
            const newCount = updateCount + 1;
            axios.post('http://localhost:3000/enrollments', enrollPost)
                .then((res) => {
                    if (res.data.insertedId) {
                        setEnroll(true);
                        setUpdateCount(newCount);
                        setUserEnrollments(prev => [...prev, enrollPost]);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You have successfully enrolled!',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        axios.put(`http://localhost:3000/courses/${_id}`, { enrollCount: newCount });
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
        }
    };
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-md mt-10 transition-colors duration-300 mb-5">
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
            <div>
                {
                    seatsLeft > 0 ? (
                        <div className="flex justify-start">
                            {user ? (
                                <button
                                    onClick={handleEnroll}
                                    className={`btn btn-primary transition-colors duration-300 text-white dark:text-white`}
                                >
                                    {enroll ? 'Unenroll' : 'Enroll Now'}
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="px-4 py-2 rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-not-allowed"
                                >
                                    Please log in to enroll
                                </button>

                            )}
                        </div>
                    ) : (
                        <h1 className='text-2xl text-red-500'>No seats left</h1>
                    )
                }
            </div>
            <div>
                <h1 className='text-2xl mt-3'>
                    Seats Left : {seatsLeft >= 0 ? seatsLeft : 0}
                </h1>
            </div>
            <Link to='/' className='px-4 py-2 btn rounded-md bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-3 block lg:hidden'>Back To Home</Link>
        </div>
    );
};
export default CourseDetails;
