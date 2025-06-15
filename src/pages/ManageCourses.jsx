import React, { useEffect, useState } from 'react';
import UseHock from '../hock/UseHock';
import Manage from '../shared/Manage';
import { Helmet } from 'react-helmet-async';

const ManageCourses = () => {
    const { user } = UseHock();
    const [manageCourse, setManageCourse] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/manageCourses?email=${user.email}`)
                .then(res => res.json())
                .then(data => setManageCourse(data))
        }
    }, [user])

    return (
        
            <div className="max-w-6xl mx-auto px-4 py-8">
                <Helmet>
                    <title>Manage Course</title>
                </Helmet>
                <h1 className="text-3xl font-bold mb-6 text-center">Manage Your Courses</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>Title</th>
                                <th>Short Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageCourse.map(manage => <Manage key={manage._id} manage={manage} setManageCourse={setManageCourse} manageCourse={manageCourse}></Manage>)
                            }
                            {manageCourse.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="text-center py-4 text-gray-500">No courses added yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
           

       
    );
};

export default ManageCourses;