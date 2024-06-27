import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
import DonateBookBtn from './DonateBookBtn';


function Nav() {
    const [click, setClick] = useState(false);

    const navbar = ['Home', 'About', 'Contact', 'FAQs'];
    const navigation = navbar.map((nav) => (
        nav === 'Home' ? <Link to={'/'} className='nav--li hover:rounded-full py-1 px-3 hover:bg-blue-600 hover:text-yellow-400 outline-none hover:scale-105 active:scale-95 transition-all ease-linear' key={nav}>{nav}</Link> : <Link to={`/${nav.toLowerCase()}`} className='nav--li hover:rounded-full py-1 px-3 hover:bg-blue-600 outline-none hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear' key={nav}>{nav}</Link>))
    // <Link key={nav} to={`/${nav.toLowerCase()}`} className='nav--li hover:rounded-full py-1 px-3 hover:bg-blue-600 hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all ease-linear' > {nav}</Link >

    const navigate = <>
        <div className='lg:hidden block absolute top-16 w-full bg-blue-500 left-0 right-0 navigate'>
            <ul className='grid py-6 w-1 gap-6 text-white'>
                {navigation}
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
                        <Link to={'/home'} className='text-white outline-none text-4xl font-semibold'>&#8478;</Link>
                    </div>
                    <div className='nav--container'>
                        <ul className='flex place-items-center text-white'>
                            {navigation}
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
                            <IoClose onClick={handleClick} className='text-white text-4xl border-2 outline-none rounded-md border-white cursor-pointer' />
                        ) : (
                            <IoMenu onClick={handleClick} className='text-white text-4xl border-2 outline-none rounded-md border-white cursor-pointer' />
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav