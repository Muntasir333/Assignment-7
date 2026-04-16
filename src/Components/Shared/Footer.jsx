import React from 'react';
import footer from "../../assets/logo-xl.png"

import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/instagram.png"

const Footer = () => {
    return (
        <div className='bg-[#244D3F] py-20'>
            <div className='flex flex-col items-center space-y-3'> 
                <img src={footer} alt="" />
                <p className='text-[16px] text-white font-normal'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-[20px] text-white font-normal'>Social Links</p>
                <div className='flex gap-2'>
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={insta} alt=""/>
                </div>
                <hr className='border-gray-500 w-3/4'></hr>
                <div className='flex flex-col lg:flex-row justify-between lg:gap-100'> 
                    <p className='text-[16px] text-white font-normal'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p className='text-[16px] text-white font-normal'>privacy policy</p>
                        <p className='text-[16px] text-white font-normal'>Terms of service</p>
                        <p className='text-[16px] text-white font-normal'>Cookies</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;