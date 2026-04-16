import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router';
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from 'react-router';



const Navbar = () => {
    return (
        <div>
            <nav className='flex flex-col lg:flex-row justify-between items-center px-20 py-6 '>
                <img src={logo} alt="" className='w-36 h-8' />
                <div>
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink to={"/"} className={({isActive})=>`flex items-center gap-2 px-2 py-2 rounded-lg ${isActive ? "bg-[#244D3F] text-white" : "text-black"}`}><CiHome />Home</NavLink>
                        </li>
                        <li className='flex items-center gap-2'>
                            <NavLink to={"/timeline"} className={({isActive})=>`flex items-center gap-2 px-2 py-2 rounded-lg  ${isActive ? "bg-[#244D3F] text-white" : "text-black"}`}><IoMdTime />Timeline</NavLink>
                        </li>
                        <li className='flex items-center gap-2'>
                           <NavLink to={"/stat"} className={({isActive})=>`flex items-center gap-2 px-2 py-2 rounded-lg ${isActive ? "bg-[#244D3F] text-white" : "text-black"}`}> <TfiStatsUp />
Stats</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;