import React from 'react';
import { Link } from 'react-router';

const Manage = ({ manage }) => {
   const {title, description, _id} = manage;


    return (
        <tr >
            <td className="font-semibold">{title}</td>
            <td>{description.slice(0, 50)}...</td>
            <td className="space-x-2">
                <Link to={`/edit/${_id}`}  className="btn btn-sm btn-info text-white"
                >Edit </Link>
                <button className="btn btn-sm btn-error text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Manage;