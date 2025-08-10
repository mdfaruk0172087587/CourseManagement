import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../shared/Footer';
import Loading from '../shared/Loading';
const HomeLayOut = () => {
  const navigation = useNavigation();
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </header>
      <main className='flex-grow'>
        {
          navigation.state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>
        }
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default HomeLayOut;