import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const HomeLayOut = () => {
    return (
        <div>
           <header className='sticky top-0 z-50'>
             <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default HomeLayOut;