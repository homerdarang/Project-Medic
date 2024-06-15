import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const SCALE_ANIMATE = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 }
}

function BookingFaqs() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <>
            <div>
                <Accordion className='z-0' open={open === 1} icon={<Icon id={1} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(1)}>
                        Q4: How do I book an online consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        To book an online consultation, you need to create an account and log in <span className='text-blue-400 hover:underline'><Link to={'/form'}>here</Link></span> . Once logged in, navigate to the "Book a Consultation" section, choose your preferred date and time, and confirm your appointment.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(2)}>
                        Q5: Can I reschedule or cancel my appointment?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Yes, you can reschedule or cancel your appointment through your <span className='text-blue-400 hover:underline'><Link to={'/dashboard'}>dashboard</Link></span>. Simply go to your upcoming appointments and select the reschedule or cancel option.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(3)}>
                        Q6: What should I do if I miss my scheduled consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        If you miss your scheduled consultation, you can rebook a new appointment through the "Book a Consultation" section on your <span className='text-blue-400 hover:underline'><Link to={'/dashboard'}>dashboard</Link></span>.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(4)}>
                        Q7: What type of consultations do you offer?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        We offer consultations on various baby-related topics, including general health, nutrition, sleep, developmental milestones, and more. Our team of pediatricians and child health experts are here to assist you.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default BookingFaqs