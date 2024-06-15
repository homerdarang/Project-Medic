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

function AdditionalSupportFaqs() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <>
            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(1)}>
                        Q14: Can I ask follow-up questions after my consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        Yes, you can ask follow-up questions through the chat feature or book another consultation for more     detailed advice.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(2)}>
                        Q15: Do you provide emergency medical services?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        No, we do not provide emergency medical services. If you have an urgent medical issue, please contact your local emergency services or visit a healthcare facility immediately.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(3)}>
                        Q16: How can I provide feedback about my consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        After your consultation, you will receive an invitation to provide feedback. You can also submit feedback through your dashboard at any time.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default AdditionalSupportFaqs