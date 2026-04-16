import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className=' flex flex-col items-center py-20 space-y-6'>
                <h2 className='text-[#1F2937] text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-[#64748B] text-[16px] font-normal text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>
         <button className='btn bg-[#244D3F] text-white'>+ Add a friend</button>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#F8FAFC] w-max lg:container mx-auto'>
                <div className='flex flex-col gap-2 bg-white text-center py-8'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>10</h1>
                    <p className='text-[#64748B] text-[18px] font-normal'>Total Friends</p>
                </div>
                <div className='flex flex-col gap-2 bg-white text-center py-8'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                    <p className='text-[#64748B] text-[18px] font-normal'>On Track</p>
                </div>
                <div className='flex flex-col gap-2 bg-white text-center py-8'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                    <p className='text-[#64748B] text-[18px] font-normal'>Need Attention</p>
                </div>
                <div className='flex flex-col gap-2 bg-white text-center py-8'>
                    <h1 className='text-3xl font-semibold text-[#244D3F]'>12</h1>
                    <p className='text-[#64748B] text-[18px] font-normal'>Interactions This Month</p>
                </div>
            </div>
            <hr className='mt-10 py-5 mx-auto border-gray-500 w-3/4 '></hr>
           
        </div>
    );
};

export default Banner;