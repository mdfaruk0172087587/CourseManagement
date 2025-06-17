import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyEnrollCard = ({ enroll, setMyEnrollCourse, myEnrollCourse }) => {
    const { title, description, duration } = enroll.courseDetails;
    // handleRemove 
    const handleRemove = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-theta-ecru.vercel.app/enrollments/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {

                            const filterData = myEnrollCourse.filter(item => item._id !== id);
                            setMyEnrollCourse(filterData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
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
        });
    }

    return (
        <tr >

            <td className="font-semibold">{title}</td>
            <td>{description.slice(0, 50)}...</td>
            <td className="font-semibold  hidden md:table-cell">{duration}</td>
            <td className="space-x-2">
                <button onClick={() => handleRemove(enroll._id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'> Remove Enrollment</button>
            </td>
        </tr>
    );
};

export default MyEnrollCard;