import React from 'react';
import aboutImg from '../../assets/images/AboutUs.jpg';
import MissionVision from '../MissionVision';
import WhyChooseUs from '../WhyChooseUs';
import { MdHomeRepairService } from "react-icons/md";
import { SiZend } from "react-icons/si";
import Footer from '../Footer';

function About() {
    return (
        <>
            <div className='md:px-28 md:py-24 px-16 mt-16 py-14 lg:mt-24 md:mt-20 text-gray-800'>
                <div className='lg:flex lg:justify-center m-auto lg:w-3/4'>
                    <img className='lg:h-60 md:w-60 lg:m-8 md:m-4 md:float-start w-40 mx-auto my-2 rounded-full' src={aboutImg} alt="Lady Doctor Smiling" />
                    <div className='lg:w-2/3 p-2'>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold my-3'>
                            About Us
                        </h1>
                        <p className='lg:text-xl md:text-lg text-base font-light'>Welcome to our website, your trusted source for free online consultations for babies. We understand that parenting, especially during the early years, comes with numerous questions and concerns. Our platform is dedicated to providing parents and caregivers with expert advice and reliable information related to the health and well-being of their little ones. Our consultation services are focused on online booking, offering you the convenience of scheduling and accessing professional advice from the comfort of your home, without the need for walk-in appointments.</p>
                    </div>
                </div>
                <div className='mt-8 lg:w-3/4 m-auto p-2'>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold text-left flex place-items-center'>
                        Our Services
                        <span className='ms-2'><MdHomeRepairService /></span>
                    </h1>
                    <p className='lg:text-xl md:text-lg text-base font-light'>Our website offers a range of services designed to support    you through various aspects of your baby's growth and development. These include:</p>
                    <div className='lg:w-4/5 grid mx-auto my-8'>
                        <ul className='list-image-[url(src/assets/checked.png)]'>
                            <li className='my-5 text-lg font-light'>
                                <span className='lg:text-xl md:text-xl text-base font-semibold'>Health and Wellness Consultations: </span>
                                Our team of experienced pediatricians and child health experts are available to answer your questions about your baby's health, from common illnesses and vaccinations to developmental milestones and preventive care.
                            </li>
                            <li className='my-5 text-lg font-light'>
                                <span className='lg:text-xl md:text-xl text-base font-semibold'>Nutrition Advice: </span>
                                Get personalized guidance on breastfeeding, formula feeding, introducing solids, and managing dietary concerns to ensure your baby receives optimal nutrition during the crucial early stages of life.
                            </li>
                            <li className='my-5 text-lg font-light'>
                                <span className='lg:text-xl md:text-xl text-base font-semibold'>Developmental Support: </span>
                                Learn about your baby's developmental stages and get advice on activities and practices that support cognitive, physical, and emotional growth.
                            </li>
                            <li className='my-5 text-lg font-light'>
                                <span className='lg:text-xl md:text-xl text-base font-semibold'>Sleep Consultation: </span>
                                Receive tips and strategies for establishing healthy sleep habits and resolving common sleep issues to ensure your baby (and you) get the rest you need.
                            </li>
                            <li className='my-5 text-lg font-light'>
                                <span className='lg:text-xl md:text-xl text-base font-semibold'>Parenting Tips: </span>
                                Access a wealth of information on various parenting topics, including managing colic, teething, and establishing routines that promote a happy and healthy family life.
                            </li>
                        </ul>
                    </div>
                    <h1 className='lg:text-2xl md:text-2xl text-xl font-semibold text-left flex place-items-center'>
                        Scope of Services
                        <span className='ms-2'><SiZend /></span>
                    </h1>
                    <p className='lg:text-xl md:text-lg text-base font-light'>Our services are exclusively focused on baby consultations, ensuring that all advice and information provided are directly related to the well-being of your child. We do not entertain questions unrelated to baby consultation to maintain the quality and relevance of our support.</p>
                    <MissionVision />
                    <WhyChooseUs />
                </div>
            </div>
            <Footer />
        </ >
    )
}

export default About