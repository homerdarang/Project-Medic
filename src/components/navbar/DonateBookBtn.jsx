import React from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { FaCalendarAlt, FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";

function DonateBookBtn() {
    // const [active, setActive] = React.useState();

    // const getItemProps = (index) => ({
    //     // className: active === index ? "bg-gray-100 text-gray-900" : "",
    //     // onClick: () => setActive(index),
    // });


    // Use navigate
    // const next = () => {
    //     // useNavigate('./Donate')
    //     if (active === 5) return;

    //     setActive(active + 1);
    // };

    // Use navigate
    // const prev = () => {
    //     // useNavigate('./BookNow')
    //     if (active === 1) return;

    //     setActive(active - 1);
    // };

    return (
        <div className='flex w-max flex-col gap-4 ms-3 group-btn'>
            <ButtonGroup className='bg-transparent' variant='outlined' size='sm'>
                <Link to={'/donate'} className='flex place-items-center bg-yellow-600 text-gray-600 px-3 font-semibold text-sm outline-none hover:text-white hover:bg-gray-700 rounded-s-full ps-3  transition-all ease-linear'>
                    <span className='me-2'><FaDonate /></span>
                    Donate
                </Link>
                <Link to={'/book-now'} className='flex place-items-center bg-white text-gray-600 px-3 font-semibold text-sm outline-none hover:bg-gray-700 hover:text-white rounded-e-full ps-2 py-3 transition-all ease-linear'>
                    <span className='me-2'><FaCalendarAlt /></span>
                    Book Now
                </Link>
            </ButtonGroup >
        </div >
    );
}
export default DonateBookBtn