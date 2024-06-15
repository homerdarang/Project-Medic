import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import DonateBookBtn from '../components/DonateBookBtn'; // Ensure the path is correct

const NavBars = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="relative bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-4xl font-semibold">
                &#8478;
            </div>
            <div>
                <ul className='hidden lg:flex space-x-4 place-items-center'>
                    <li className="text-white hover:text-yellow-400">Home</li>
                    <li className="text-white hover:text-yellow-400">About</li>
                    <li className="text-white hover:text-yellow-400">Contact</li>
                    <li className="text-white hover:text-yellow-400">FAQs</li>
                </ul>
            </div>
            <div className="lg:hidden text-white text-4xl cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <IoClose /> : <IoMenu />}
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 right-0 w-full bg-blue-500 lg:hidden">
                    <ul className="flex flex-col items-center py-6 space-y-4">
                        <li className="text-white hover:text-yellow-400" onClick={toggleMenu}>Home</li>
                        <li className="text-white hover:text-yellow-400" onClick={toggleMenu}>About</li>
                        <li className="text-white hover:text-yellow-400" onClick={toggleMenu}>Contact</li>
                        <li className="text-white hover:text-yellow-400" onClick={toggleMenu}>FAQs</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBars;
