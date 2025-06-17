import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Manage = ({ manage , setManageCourse, manageCourse}) => {
    const { title, description, _id } = manage;

    // handleDelate
    const handleDelate = (_id) => {

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

                // delate
                axios.delete(`https://assignment-11-server-theta-ecru.vercel.app/courses/${_id}`)
                    .then(res => {
                        // delate success
                        if (res.data.deletedCount) {
                            const filterData = manageCourse.filter(item => item._id !== _id)
                            setManageCourse(filterData)
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
            <td className="space-x-2">
                <Link to={`/edit/${_id}`} className="btn btn-sm btn-info text-white"
                >Edit </Link>
                <button onClick={() => handleDelate(_id)} className="btn btn-sm btn-error text-white"
                >
                    Delete
                </button>
            </td>

        </tr>

    );
};

export default Manage;