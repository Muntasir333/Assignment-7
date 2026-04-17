import React from 'react';
import Erro from '../../assets/3d-illustration-computer-error-object-png.webp'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#F8FAFC] mt-9 p-4'>
            <div>
                <p className='font-bold text-5xl text-center'>OOPs....</p>
            <h2 className='font-bold text-5xl'>This page is not found</h2>
            </div>
            <div className='item-center'>
            <img className='w-100' src={Erro} alt=""/>
            </div>
            <Link to={"/"} className='btn px-5  py-5 text-3xl text-white bg-green-900'>Back to Home</Link>
        </div>
    );
};

export default Error;
