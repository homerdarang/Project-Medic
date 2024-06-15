import { React, useEffect, useState } from 'react';
function FeedbackComment() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3031/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

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