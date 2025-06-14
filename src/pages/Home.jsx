import React from 'react';
import Banner from '../shared/Banner';
import TopInstructors from '../shared/TopInstructors ';
import StudentTestimonials from '../shared/StudentTestimonials';
import CoursesSection from '../shared/CoursesSection';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
           
            <header>
                <Banner></Banner>
            </header>
            <main>
                {/* courses sections */}
                <CoursesSection data={data}></CoursesSection>
                {/* TopInstructors  */}
                <TopInstructors></TopInstructors>
                {/* Review Section */}
                <StudentTestimonials></StudentTestimonials>
            </main>
        </div>
    );
};

export default Home;