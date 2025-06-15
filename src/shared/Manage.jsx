import React from 'react';

const Manage = ({ manage }) => {
   const {title, description} = manage;
    return (
        <tr >
            <td className="font-semibold">{title}</td>
            <td>{description.slice(0, 50)}...</td>
            <td className="space-x-2">
                <button

                    className="btn btn-sm btn-info text-white"
                >
                    Edit
                </button>
                <button

                    className="btn btn-sm btn-error text-white"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Manage;