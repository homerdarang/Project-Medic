import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
import DonateBookBtn from './DonateBookBtn';


function Nav() {
    const [click, setClick] = useState(false);

    const navigate = <>
        <div className='lg:hidden block absolute top-16 w-full bg-blue-500 left-0 right-0 navigate'>
            <ul className='grid py-6 text-white'>
                <Link to={'/'} className='nav--li w-20 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear'>
                    Home
                </Link>
                <Link to={'/about'} className='nav--li w-20 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear'>
                    About
                </Link>
                <Link to={'/contact'} className='nav--li w-20 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear'>
                    Contact
                </Link>
                <Link to={'/faqs'} className='nav--li w-20 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear'>
                    FAQs
                </Link>
                <li>
                    <DonateBookBtn />
                </li>
            </ul>
        </div>
    </>

    const handleClick = function () {
        setClick(prevClick => !prevClick)
    }

    return (
        <>
            <nav>
                <div className='bg-blue-400 lg:rounded-full lg:mt-10 lg:max-w-7xl m-auto fixed w-full top-0 left-0 right-0 lg:px-11 lg:py-4 px-5 py-3 flex justify-between place-items-center z-50'>
                    <div className='me-10'>
                        <Link to={'/'} className='text-white text-4xl font-semibold'>&#8478;</Link>
                    </div>
                    <div className='nav--container'>
                        <ul className='flex place-items-center text-white'>
                            <Link to={'/'} className='nav--li hover:bg-blue-600 hover:rounded-full py-1 px-3 transition-all ease-linear active:scale-95'>
                                Home
                            </Link>
                            <Link to={'/about'} className='nav--li hover:bg-blue-600 hover:rounded-full py-1 px-3 transition-all ease-linear active:scale-95'>
                                About
                            </Link>
                            <Link to={'/contact'} className='nav--li hover:bg-blue-600 hover:rounded-full py-1 px-3 transition-all ease-linear active:scale-95'>
                                Contact
                            </Link>
                            <Link to={'/faqs'} className='nav--li hover:bg-blue-600 hover:rounded-full py-1 px-3 transition-all ease-linear active:scale-95'>
                                FAQs
                            </Link>
                            <li>
                                <DonateBookBtn />
                            </li>
                        </ul>
                    </div>
                    <div className='menu--icon'>
                        {click && navigate}
                    </div>
                    <div className='menu--icon'>
                        {click ? (
                            <IoClose onClick={handleClick} className='text-white text-4xl border-2 rounded-md border-white cursor-pointer' />
                        ) : (
                            <IoMenu onClick={handleClick} className='text-white text-4xl border-2 rounded-md border-white cursor-pointer' />
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav