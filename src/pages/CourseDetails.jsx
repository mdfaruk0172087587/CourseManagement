import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import UseHock from '../hock/UseHock';
import axios from 'axios';
import Swal from 'sweetalert2';


const CourseDetails = () => {
    const [enroll, setEnroll] = useState(false)
    const data = useLoaderData();
    const { title, image, duration, instructorName, instructorEmail, createdAt, description, _id , enrollCount} = data;
    const [updateCount, setUpdateCount] = useState(enrollCount)
    const { user } = UseHock();
    useEffect(() => {
        if(user?.email){
            axios.get(`http://localhost:3000/enrollments?email=${user.email}`)
            .then(res => {
               const find = res.data.find(item => item.enrollId === _id)
               setEnroll(find)
            })
        }
    }, [user, _id])

    //    handleEnroll
    const handleEnroll = () => {
        const email = user.email;
        const enrollId = _id;
        const enrollPost = { email, enrollId }

        // update enrollCount
        const newCount = updateCount +1;
        axios.put(`http://localhost:3000/courses/${_id}`, {enrollCount: newCount})
        .then(res => {
           if(res.data.modifiedCount){
            setUpdateCount(newCount)
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
       
        // post enrollments
        axios.post('http://localhost:3000/enrollments', enrollPost)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Enroll Successfully Save !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setEnroll(true)
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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold mt-6 mb-2 text-gray-800">{title}</h1>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p><strong>Duration:</strong> {duration}</p>
                <p><strong>Instructor:</strong> {instructorName}</p>
                <p><strong>Email:</strong> {instructorEmail}</p>
                <p><strong>Published on:</strong> {new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <div>
                {
                    user ? <>
                        <button onClick={handleEnroll} disabled={enroll}  className={`btn btn-primary ${enroll ? 'btn-disabled bg-gray-400 cursor-not-allowed' : ''}`}> {enroll ? 'Enrolled ' : 'Enroll Now'}</button>
                    </>
                        :
                        <>
                            <button disabled className='btn btn-primary bg-gray-400 cursor-not-allowed'> Please log in to enroll</button>
                        </>
                }
            </div>
           
        </div>
    );
};

export default CourseDetails;