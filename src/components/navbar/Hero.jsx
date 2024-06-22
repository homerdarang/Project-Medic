import React from 'react';
import twoDoctors from '../../assets/images/healthWellness.jpg';

function Hero() {
    return (
        <>
            <div>
                <div className='bg-cover bg-center bg-no-repeat lg:h-lvh md:h-svh h-96 hero' style={{ backgroundImage: `url(${twoDoctors})` }}></div>
            </div>
        </>
    )
}

export default Hero