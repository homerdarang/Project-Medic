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
function DuringConsultationFaqs() {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <>
            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(1)}>
                        Q8: What can I expect during an online consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        During the online consultation, you can discuss your concerns with our experts, ask questions, and receive personalized advice. The session may involve video calls, chat, or a combination of both.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(2)}>
                        Q9: How should I prepare for my consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        To prepare for your consultation, ensure you have a stable internet connection and a quiet environment. Have any relevant documents or questions ready to share with the consultant.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={SCALE_ANIMATE}>
                    <AccordionHeader className='md:text-xl text-lg font-semibold' onClick={() => handleOpen(3)}>
                        Q10: What if I have technical issues during my consultation?
                    </AccordionHeader>
                    <AccordionBody className='md:text-lg text-base font-light px-3'>
                        If you encounter technical issues, try reconnecting to the session. If the problem persists, contact our support team for assistance.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    )
}

export default DuringConsultationFaqs