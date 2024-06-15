import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigationbar() {
    const [click, setClick] = useState(false);

    const navList = ['Home', 'Contacts', 'Service', 'About Us']

    const mobileView = (
        <div>
            <ul>
                {navList.map((nabs) => (
                    <li key={nabs}>
                        <NavLink to={`/${nabs}`}>{nabs}</NavLink>
                    </li>
                ))}
            </ul>
        </div >
    )

    const handleClick = () => {
        setClick(prevClick => !prevClick)
    }

    return (
        <nav nav className='lg:flex cursor-pointer' >
            {/* {mobileNav} */}
            {mobileView}
        </nav>
    )
}

export default Navigationbar