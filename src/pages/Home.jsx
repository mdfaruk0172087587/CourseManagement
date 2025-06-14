import React from 'react';
import Banner from '../shared/Banner';
import TopInstructors from '../shared/TopInstructors ';
import StudentTestimonials from '../shared/StudentTestimonials';

const Home = () => {
    return (
        <div>
           
            <header>
                <Banner></Banner>
            </header>
            <main>

                {/* TopInstructors  */}
                <TopInstructors></TopInstructors>
                {/* Review Section */}
                <StudentTestimonials></StudentTestimonials>
            </main>
        </div>
    );
};

export default Home;