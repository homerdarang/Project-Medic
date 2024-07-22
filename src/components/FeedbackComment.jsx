import { React, useEffect, useState } from 'react';
function FeedbackComment() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState([]);
    const TIMER_SEC = 1000;

    const BASE_URL = 'http://localhost:3031';

    
    useEffect(() => {
        setIsLoading(true);
        // const timer = setTimeout(() => {
        //     const feedbackComment = async () => {
        //         try {
        //             const response = await fetch(`${BASE_URL}/users`);
        //             const post = await response.json();
        //             setRecords(post)
        //         } catch (error) {
        //             setError(error);
        //         } finally {
        //             setIsLoading(false)
        //         }
        //     }
        //     feedbackComment();
        //     return () => clearTimer(timer)
        // }, TIMER_SEC)
        

        const times = setTimeout( async () => {
            try {
                const res = await fetch(`${BASE_URL}/users`);
                const post = await res.json();
                setRecords(post)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
            return () => clearTimeout(times);
        }, TIMER_SEC);
        
    }, []);

    if(isLoading) {
        return <div className='loader mx-auto my-20 text-4xl'></div>
    }

    if(error) {
        return <div className='bg-red-400 text-white px-2 py-4 '>
            <p>There is an error here: {error}</p>
        </div>
    }

    return (
        <>
            <div className='services'>
                <h1 className='text-center md:text-5xl text-3xl md:font-semibold text-blue-400 md:pb-20 pb-10 pt-5'>Feedbacks from random Clients</h1>
                {records.map((usr) => (
                    <div className='md:w-2/3 m-auto pb-16' key={usr.id}>
                        <div className='md:py-14 py-5 border-2 border-gray-600 border-dashed rounded-xl'>
                            <div className='grid py-7 px-3 w-5/6 m-auto bg-white/85 rounded-lg'>
                                <ul className='px-5 flex text-lg place-items-center'>
                                    <img className='me-3 h-12 w-12 rounded-full ring-2 ring-white' src={usr.avatar} alt="Avatar's profile pic" />
                                    <li className='font-semibold text-xl' >{usr.name}</li>
                                </ul>
                                <ul className='px-5 py-2'>
                                    <li className='font-extralight text-lg'>{`" ${usr.comment} "`}</li>
                                </ul>
                                <p className='italic px-5 text-sm font-base'>{`Somewhere in --${usr.country}`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default FeedbackComment