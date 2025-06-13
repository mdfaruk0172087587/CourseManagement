import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';

const HomeLayOut = () => {
    return (
        <div>
           <header>
             <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
           <footer>
            
           </footer>
        </div>
    );
};

export default HomeLayOut;