import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer />
            
        </div>
    );
};

export default Rootlayout;