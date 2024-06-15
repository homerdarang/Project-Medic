import { React } from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <div className='bg-blue-400 font-extralight text-gray-700 lg:py-20 md:py-10 py-5'>
                <div className='w-2/3 m-auto grid lg:grid-cols-5 md:grid-cols-3 md:gap-4 lg:gap-5'>
                    <div className='md:col-span-1 col-span-2 my-2'>
                        <p className='font-semibold my-2 transition-all ease-linear w-36'>e-Konsulta &#8478;</p>
                        <p className='my-2'>
                            <Link to={'/contact'} className=' hover:text-white cursor-pointer transition-all ease-linear'>Questions</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/help'} className=' hover:text-white cursor-pointer transition-all ease-linear'>Help</Link>
                        </p>
                    </div>
                    <div className='md:col-span-1 col-span-2 my-2'>
                        <p className='my-2 '>
                            <Link to={'/about'} className='hover:text-white cursor-pointer transition-all ease-linear'>About Us</Link>
                        </p>
                        <p className='my-2 '>
                            <Link to={'/privacy-policy'} className='hover:text-white cursor-pointer transition-all ease-linear'>Privacy Policy</Link>
                        </p>
                        <p className='my-2 '>
                            <Link to={'/terms-services'} className='hover:text-white cursor-pointer transition-all ease-linear'>Terms of Services</Link>
                        </p>
                        <p className='my-2 '>
                            <Link to={'/contact'} className='hover:text-white cursor-pointer transition-all ease-linear'>Contact Us</Link>
                        </p>
                        <p className='my-2 '>
                            <Link to={'/careers'} className='hover:text-white cursor-pointer transition-all ease-linear'>Careers</Link>
                        </p>
                    </div>
                    <div className='md:col-span-1 col-span-2 my-2'>
                        <p className='my-2'>
                            <Link to={'/life-&-arts'} className='hover:text-white cursor-pointer transition-all ease-linear'>Life and Arts</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/health-&fitness'} className='hover:text-white cursor-pointer transition-all ease-linear'>Health and Fitness</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/doctors'} className='hover:text-white cursor-pointer transition-all ease-linear'>Doctors</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/lifestyle'} className='hover:text-white cursor-pointer transition-all ease-linear'>Lifestyle</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/business'} className='hover:text-white cursor-pointer transition-all ease-linear'>Business</Link>
                        </p>
                    </div>
                    <div className='md:col-span-1 col-span-2 my-2'>
                        <p className='my-2'>
                            <Link to={'/nesw-events'} className='hover:text-white cursor-pointer transition-all ease-linear'>News and Events</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/advertising'} className='hover:text-white cursor-pointer transition-all ease-linear'>Advertising</Link>
                        </p>
                        <p className='my-2'>
                            <Link to={'/sign-up'} className='hover:text-white cursor-pointer transition-all ease-linear'>Join Us</Link>
                        </p>
                    </div>
                    <div className='md:col-span-1 col-span-2 my-2'>
                        <label className='font-medium' htmlFor="searchForum">Search Forum</label>
                        <div className='flex items-center'>
                            <input className='px-2 py-1 rounded-l-md border border-gray-500' type="search" placeholder="Search here..." name="searchForum" id="searchForum" />
                            <Link to={'/search'} className='text-gray-500 px-3 py-1 rounded-r-md bg-yellow-600 hover:bg-yellow-700 hover:text-gray-700 transition-all ease-linear'>
                                <button>Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-400 lg:py-16 py-20'>
                <div className='flex w-2/3 m-auto text-sm'>
                    <div className='text-blue-gray-600 font-extralight md:flex'>
                        &#8478; e-Konsulta {year} Copyright &copy; &bull;
                        <p className='hover:text-white hover:underline transition-all ease-linear'>
                            <Link to={'/terms-services'}>Terms and Services</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer