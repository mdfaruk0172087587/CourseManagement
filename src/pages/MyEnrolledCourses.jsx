import React, { useEffect, useState } from 'react';
import UseHock from '../hock/UseHock';
import { Helmet } from 'react-helmet-async';
import MyEnrollCard from '../shared/MyEnrollCard';

const MyEnrolledCourses = () => {
    const {user} = UseHock();
    const [myEnrollCourse, setMyEnrollCourse] = useState([]);

    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:3000/myEnrolledCourses?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyEnrollCourse(data))
        }
    }, [user])
    
    return (
           <div className="max-w-6xl mx-auto px-4 py-8">
                <Helmet>
                    <title>My Enroll Course</title>
                </Helmet>
                <h1 className="text-3xl font-bold mb-6 text-center">My Enroll Courses</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>Title</th>
                                <th>Short Description</th>
                                <th>Duration</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            myEnrollCourse.map(enroll => <MyEnrollCard key={enroll._id} enroll={enroll} myEnrollCourse={myEnrollCourse} setMyEnrollCourse={setMyEnrollCourse}></MyEnrollCard>)
                           }
                           
                        </tbody>
                    </table>
                </div>
            </div>
           
    );
};

export default MyEnrolledCourses;