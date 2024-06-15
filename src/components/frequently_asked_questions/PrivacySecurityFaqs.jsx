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

function PrivacySecurityFaqs() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <>
            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(1)}>
                        Q11: How is my personal information protected?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Your personal information is protected by a secure server. We use industry-standard encryption methods to protect your data.We use advanced encryption methods to protect your personal information and ensure your data is secure. Please review our privacy policy for more details.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(2)}>
                        Q12: Are the consultations confidential?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Yes, all consultations are confidential. Our team follows strict confidentiality protocols to protect your privacy and personal information.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(3)}>
                        Q13: What data do you collect, and how is it used?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        We collect information necessary to provide you with accurate and personalized advice. This includes your contact details, baby’s health history, and consultation records. We use this data to improve our services and provide better care.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default PrivacySecurityFaqs