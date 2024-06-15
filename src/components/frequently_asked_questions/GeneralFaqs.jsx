import { React, useState } from 'react';

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

function GeneralFaqs() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <>
            <div >
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(1)}>
                        Q1: What is the purpose of your website?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Our website provides free online consultations for parents and caregivers seeking expert advice on their baby's health and development. Our services focus exclusively on baby-related issues to ensure high-quality, relevant support.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(2)}>
                        Q2: Who can use your services?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Any parent or caregiver looking for advice on baby health and development can use our services. Our platform is designed to be accessible to everyone.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={SCALE_ANIMATE} >
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(3)}>
                        Q3: Are the consultations really free?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Yes, all our consultations are completely free of charge. We believe in providing accessible healthcare support to all parents and caregivers.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default GeneralFaqs