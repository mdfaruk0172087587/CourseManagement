import React from 'react';

const CoursesCard = ({item}) => {
   const {image, title, instructorName, duration,  createdAt} = item;
    return (
        <div  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure>
              <img src={image} alt={title} className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="text-sm text-gray-500">
                Added on: {new Date(createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">Instructor: {instructorName}</p>
              <p className="text-sm text-gray-600">Duration: {duration}</p>
              <div className="card-actions justify-end mt-4">
                {/* <Link to={`/courseDetails/${_id}`}>
                  <button className="btn btn-sm btn-primary">Details</button>
                </Link> */}
              </div>
            </div>
          </div>
    );
};

export default CoursesCard;