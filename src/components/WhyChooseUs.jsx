import React from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";


function WhyChooseUs() {
    return (
        <div>
            <h1 className='lg:text-2xl md:text-2xl text-xl font-semibold text-left flex place-items-center'>
                Why Choose Us
                <span className='ms-2'><BsQuestionCircleFill /></span>
            </h1>
            <p className='lg:text-xl md:text-lg text-base font-light'>Our vision is to be the leading online resource for baby consultations, recognized for our commitment to excellence, accessibility, and unwavering focus on the health and happiness of babies. We strive to empower parents with the knowledge and support they need to nurture their children through the critical early years, fostering a healthier and happier future for families everywhere.</p>
            <div className='lg:w-4/5 grid mx-auto my-6'>
                <ul className='list-image-[url(src/assets/checked.png)]'>
                    <li className='my-5 text-lg font-light'>
                        <span className='lg:text-xl md:text-xl text-base font-semibold'>Expert Guidance: </span>
                        Our consultations are conducted by certified pediatricians and child health specialists with years of experience.
                    </li>
                    <li className='my-5 text-lg font-light'>
                        <span className='lg:text-xl md:text-lg text-base font-semibold'>Convenience:  </span>
                        Access our services from the comfort of your home, eliminating the need for travel and long waiting times.
                    </li>
                    <li className='my-5 text-lg font-light'>
                        <span className='lg:text-xl md:text-lg text-base font-semibold'>Free Service: </span>
                        Our consultations are entirely free, ensuring that every parent has access to the advice they need, regardless of financial constraints.
                    </li>
                    <li className='my-5 text-lg font-light'>
                        <span className='lg:text-xl md:text-lg text-base font-semibold'>Focused Support: </span>
                        Our specialization in baby consultations means that you receive targeted, relevant advice specific to your child's needs.
                    </li>
                </ul>
            </div>
            <p className='text-lg font-light'>Thank you for choosing us as your partner in your baby's health journey. We look forward to assisting you and ensuring that your little one receives the best care possible.</p>
        </div>
    )
}

export default WhyChooseUs