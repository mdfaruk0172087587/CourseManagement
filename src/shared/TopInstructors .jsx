import React from 'react';

const instructors = [
  {
    name: "Rahim Uddin",
    image: "https://i.ibb.co/7JKLZ3Jd/uifaces-popular-image.jpg",
    courses: 12,
    rating: 4.9,
  },
  {
    name: "Shamima Nasrin",
    image: "https://i.ibb.co/Df5Rp2nb/uifaces-popular-image-2.jpg",
    courses: 8,
    rating: 4.8,
  },
  {
    name: "Tanvir Hasan",
    image: "https://i.ibb.co/2Yfwb2gH/uifaces-popular-image-1.jpg",
    courses: 10,
    rating: 4.7,
  },
];
const TopInstructors = () => {
  return (
    <section className="my-10 max-w-[94%] mx-auto ">
      <h2 className="text-3xl font-medium text-center mb-6">🌟 Top Rated Instructors</h2>
       <p className="text-center  max-w-3xl mx-auto mb-6">
        Meet our top-rated instructors who bring years of experience and passion to help you master new skills. 
        They design comprehensive courses that combine theory with practical application to ensure effective learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {instructors.map((instructor, idx) => (
          <div key={idx} className="card p-4  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure><img src={instructor.image} alt={instructor.name} className="rounded-full w-24 h-24 object-cover" /></figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Courses: {instructor.courses}</p>
              <p>Rating: ⭐ {instructor.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
