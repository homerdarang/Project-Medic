import React from 'react';
import Hero from './Hero';
import Footer from '../Footer';
import Banner from '../services_offeed/Banner';
import FeedbackComment from '../FeedbackComment';

function Home() {
    return (
        <>
            <div className='z-[-1] absolute left-0 right-0 m-auto'>
                <div className='text-white text-center absolute left-0 right-0 m-auto lg:top-96 md:top-80 top-40 '>
                    <div className='lg:text-7xl md:text-4xl text-2xl font-semibold my-5'>
                        <h1>e-Konsulta <span>&#8478;</span></h1>
                    </div>
                    <div className='lg:text-xl lg:font-normal md:text-lg md:font-medium lg:px-6 px-12 text-sm font-light'>
                        <p>Your Baby's Health, Your Convenience: Expert Care just a click away!</p>
                    </div>
                </div>
                <Hero />
                <Banner />
                <FeedbackComment />
                <Footer />
            </div>
        </>
    )
}

export default Home