import React from 'react';
import faqsImg from '../../assets/faqs.jpg';

import { BsQuestionCircleFill } from "react-icons/bs";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { BsCalendar2RangeFill } from "react-icons/bs";
import { MdPrivacyTip } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";

import GeneralFaqs from '../frequently_asked_questions/GeneralFaqs';
import BookingFaqs from '../frequently_asked_questions/BookingFaqs';
import DuringConsultationFaqs from '../frequently_asked_questions/DuringConsultationFaqs';
import PrivacySecurityFaqs from '../frequently_asked_questions/PrivacySecurityFaqs';
import AdditionalSupportFaqs from '../frequently_asked_questions/AdditionalSupportFaqs';
import Footer from '../Footer';

function Faqs() {

    return (
        <>
            <div className='w-2/3 py-44  mx-auto text-gray-800 z-[1]'>
                <div className='md:flex md:justify-evenly md:place-items-center '>
                    <div className=''>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold my-6 flex place-items-center'>
                            FAQs
                            <span className='ms-2'><BsQuestionCircleFill /> </span>
                        </h1>
                        <p className='md:text-lg text-base font-light'>Welcome to our Frequently Asked Questions (FAQs) section. Here, you’ll find answers to some of the most common questions about our free online baby consultation services. If you have additional questions, feel free to contact us.</p>
                    </div>
                    <img className='faqsImg lg:w-1/3 md:w-60 w-52 rounded-full' src={faqsImg} alt="" />
                </div>
                <div className=' mt-14 mb-7'>
                    <div className='flex place-items-center'>
                        <h2 className='md:text-xl font-semibold'>General Questions</h2>
                        <span className='ms-2'><BsFillQuestionSquareFill /></span>
                    </div>
                    <GeneralFaqs />
                </div>

                <div className=' mt-14 mb-7'>
                    <div className='flex place-items-center'>
                        <h2 className='md:text-xl font-semibold'>Booking and Consultation</h2>
                        <span className='ms-2'><AiFillSchedule /></span>
                    </div>
                    <BookingFaqs />
                </div>

                <div className=' mt-14 mb-7'>
                    <div className='flex place-items-center'>
                        <h2 className='md:text-xl font-semibold'>During the Consultation</h2>
                        <span className='ms-2'><BsCalendar2RangeFill /></span>
                    </div>
                    <DuringConsultationFaqs />
                </div>

                <div className=' mt-14 mb-7'>
                    <div className='flex place-items-center'>
                        <h2 className='md:text-xl font-semibold'>Privacy and Security</h2>
                        <span className='ms-2'><MdPrivacyTip /></span>
                    </div>
                    <PrivacySecurityFaqs />
                </div>

                <div className=' mt-14 mb-7'>
                    <div className='flex place-items-center'>
                        <h2 className='md:text-xl font-semibold'>Additional Support</h2>
                        <span className='ms-2'><MdContactSupport /></span>
                    </div>
                    <AdditionalSupportFaqs />
                </div>
                <div className='my-12'>
                    <p className='md:text-xl font-light'>If you have any other questions or need further assistance, please do not hesitate to contact our support team. We are here to help you and ensure you receive the best possible care for your baby.</p>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Faqs