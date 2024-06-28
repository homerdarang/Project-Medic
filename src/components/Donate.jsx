import React from 'react';

import { Link } from 'react-router-dom';

import gcashImg from '../../src/assets/imgPayment/gcash.png';
import grabPayImg from '../../src/assets/imgPayment/GrabPay-header.jpg';
import paypalImg from '../../src/assets/imgPayment/pngegg.png';
import visaCard from '../../src/assets/imgPayment/Visa_Logo.png';
import masterCard from '../../src/assets/imgPayment/Mastercard-Logo.wine.png';

function Donate() {
  return (
    <>
        <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 w-4/5 m-auto mt-48'>
            <div className='border text-gray-500 rounded-3xl px-10 py-20'>
                <div className='grid gap-4 w-2/3 m-auto'>
                    <p className='text-xl mb-5'>How would you like to donate?</p>
                    <div className='border px-4 bg-gray-50 py-2 rounded-md flex justify-between place-items-center'>
                        <p>Gcash</p>
                        <Link to='/gcash' className='outline-none active:scale-95'>
                            <img className='w-24 border p-1 bg-white/50 hover:scale-105 outline-none transition-all ease-linear' src={gcashImg} alt="" />
                        </Link>
                    </div>
                    <div className='border px-4 py-2 bg-gray-50 rounded-md flex justify-between place-items-center'>
                        <p>Grab Pay</p>
                        <Link to='/grab-pay'>
                            <img className='w-24 border p-1 bg-white/50 hover:scale-105 outline-none transition-all ease-linear' src={grabPayImg} alt="" />
                        </Link>
                    </div>
                    <div className='border px-4 py-2 bg-gray-50 rounded-md flex justify-between place-items-center'>
                        <p>Paypal</p>
                        <Link to='/paypal'>
                            <img className='w-24 border p-1 bg-white/50 hover:scale-105 outline-none transition-all ease-linear' src={paypalImg} alt="" />
                        </Link>
                    </div>
                    <div className='border px-4 py-2 bg-gray-50 rounded-md flex justify-between place-items-center'>
                        <p>Visa</p>
                        <div className='flex flex-row gap-4'>
                            <Link to='/visa'>
                                <img className='w-20 border p-1 bg-white/50 hover:scale-105 outline-none transition-all ease-linear' src={visaCard} alt="" />
                            </Link>
                            <Link to={'/mastercard'}>
                                <img className='w-11 border p-1 bg-white/50 hover:scale-105 outline-none transition-all ease-linear' src={masterCard} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Donate 