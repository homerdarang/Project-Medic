import React from 'react';
import { Link } from 'react-router-dom';

import { GiFruitBowl } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

function Banner() {
    return (
        <>
            <div className='lg:py-40 md:py-36 py-32 services'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl mb-8 md:font-bold font-semibold text-blue-400 text-center'>Treatment and Services</h1>
                <div className='lg:py-20 lg:px-28 md:px-20 md:py-10 px-7 py-3 font-medium text-blue-400 text-2xl lg:flex lg:justify-center gap-3 grid place-items-center lg:grid-cols-5 lg:gap-x-1 md:gap-x-20 md:grid-cols-3 text-center'>
                    <Link to={'/nutrition-monitoring'} className='bg-white/60 md:w-56 w-80 m-3 lg:px-10 lg:py-5 md:px-8 md:py-4 px-5 py-2 border-[1px] border-dashed border-gray-500 rounded-md hover:shadow-2xl hover:bg-blue-400 hover:text-white hover:border-none  hover:scale-105 transition-all ease-linear grid place-items-center outline-none'>
                        <span className='py-2'><GiFruitBowl /></span>
                        Nutrition Monitoring
                    </Link>
                    <Link to={'/mental-development'} className='bg-white/60 md:w-56 w-80 m-3 lg:px-10 lg:py-5 md:px-8 md:py-4 px-5 py-2 border-[1px] border-dashed border-gray-500 rounded-md hover:shadow-2xl hover:bg-blue-400 hover:text-white hover:border-none hover:scale-105 transition-all ease-linear grid place-items-center outline-none'>
                        <span className='py-2'><GiBrain /></span>
                        Mental Development
                    </Link>
                    <Link to={'/health-wellness'} className='bg-white/60 md:w-56 w-80 m-3 lg:px-10 lg:py-5 md:px-8 md:py-4 px-5 py-2 border-[1px] border-dashed border-gray-500 rounded-md hover:shadow-2xl hover:bg-blue-400 hover:text-white hover:border-none hover:scale-105 transition-all ease-linear grid place-items-center outline-none'>
                        <span className='py-2'><MdHealthAndSafety /></span>
                        Toddler Wellness
                    </Link>
                    <Link to={'/sleep-consultation'} className='bg-white/60 md:w-56 w-80 m-3 lg:px-10 lg:py-5 md:px-8 md:py-4 px-5 py-2 border-[1px] border-dashed border-gray-500 rounded-md hover:shadow-2xl hover:bg-blue-400 hover:text-white hover:border-none  hover:scale-105 transition-all ease-linear grid place-items-center outline-none'>
                        <span className='py-2'><GiNightSleep /></span>
                        Sleep Consultation
                    </Link>
                    <Link to={'/parenting-techniques'} className='bg-white/60 md:w-56 w-80 m-3 lg:px-10 lg:py-5 md:px-8 md:py-4 px-5 py-2 border-[1px] border-dashed border-gray-500 rounded-md hover:shadow-2xl hover:bg-blue-400 hover:text-white hover:border-none  hover:scale-105 transition-all ease-linear grid place-items-center outline-none'>
                        <span className='py-2'><MdFamilyRestroom /></span>
                        Parenting Techniques
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Banner