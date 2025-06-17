import React, { Suspense } from 'react';
import Banner from '../shared/Banner';
import TopInstructors from '../shared/TopInstructors ';
import StudentTestimonials from '../shared/StudentTestimonials';
import CoursesSection from '../shared/CoursesSection';
import { useLoaderData } from 'react-router';
import PopularCourses from '../shared/PopularCourses';
import Loading from '../shared/Loading';

const Home = () => {
    const data = useLoaderData();
    const popularPromise = fetch('https://assignment-11-server-theta-ecru.vercel.app/popularCourses').then(res => res.json())
    return (
        <div>
           
            <header>
                <Banner></Banner>
            </header>
            <main>
                {/* courses sections */}
                <CoursesSection data={data}></CoursesSection>
                {/* popular */}
               <Suspense fallback={<Loading></Loading>}>
                 <PopularCourses popularPromise={popularPromise}></PopularCourses>
               </Suspense>
                {/* TopInstructors  */}
                <TopInstructors></TopInstructors>
                {/* Review Section */}
                <StudentTestimonials></StudentTestimonials>
            </main>
        </div>
    );
};

export default Home;