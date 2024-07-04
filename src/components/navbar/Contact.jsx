import React, { useState } from 'react'
// import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'

import { RiMailSendLine, RiArrowGoBackFill } from 'react-icons/ri';


function Contact() {
    const navigate = useNavigate();
    
    const [replyTo, setReplyTo] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    // const [title, setTitle] = useState('');
    const [result, setResult] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if(!name || !email) {
        //     setError('Input fields cannot be empty!')
        // } else if (!email.includes('@gmail.com') || !RiEmotionNormalLine.includes('@icloud.com')) {
        //     setError('Email must be a gmail or iCloud email')
        // } else {
        //     setError(status)
        // }

        const requestBody = {
            sendto: 'homerdarang@icloud.com',
            replyTo,
            name,
            body,
            // title,
            ishtml: 'false'
        };

        const url = 'https://mail-sender-api1.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'aa4bb93377msh5b04192fb75f0a8p11c396jsn81fbd93a431d',
                'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // const status = response.ok ? 'Success' : 'Error';
            const status = response.ok ? <div>
                <div className='grid place-items-center px-5 py-7 bg-gray-200 rounded-md w-1/2 m-auto bg-slate-300 absolute left-0 right-0 top-1/2'>
                    <RiMailSendLine className='text-3xl text-green-500' />
                    <h1 className='text-4xl text-green-500 mt-6'>Message Sent!</h1>
                    <button className='px-6 py-2 mt-8 rounded-full text-slate-700 bg-gray-50' onClick={() => navigate(-1)}>Close</button>
                </div>
            </div> : <div>
                <div className='grid place-items-center px-5 py-7 bg-gray-200 rounded-md w-1/2 m-auto bg-slate-300 absolute left-0 right-0 top-1/2'>
                    <RiMailSendLine className='text-3xl text-red-500' />
                    <h1 className='text-4xl text-red-500 mt-6'>Message Sent!</h1>
                    <button className='px-6 py-2 mt-8 rounded-full text-white bg-red-500' onClick={() => navigate(-1)}>Close</button>
                </div>
            </div>; // Check if the response status is 200 (success) or not;
            setStatus(status)
            setResult(result);
            console.log('API Response:', result); // Log the API response
            console.log('Status:', status); // Log the status
        } catch (error) {
            setError(error.toString());
            console.error('Error:', error); // Log any errors
        }

    };

    if(error) {
        return <div className='bg-red-400 px-3 py-2'>
            <p className='text-lg text-white'>Error: {error}</p>
        </div>
    }
 
    return (
        
        <>
            <div className='mt-36 w-full mx-auto grid  place-content-center'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-medium text-blue-400 p-8 flex place-items-center'>
                    <RiMailSendLine className='text-blue-400 mr-2'/>
                    Send a message
                </h1>
                <Link to={'/'} className='border-2 ps-5 pe-3 py-2 max-w-32 hover:bg-gray-50 transition-all ease-linear flex place-items-center place-self-center'>
                    <RiArrowGoBackFill className='me-2' />
                    Go Back
                </Link>
                <form className='grid my-10 w-full ' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label className='text-xl font-light' htmlFor="email">Your Email:</label>
                        <input
                            onChange={(e) => setReplyTo(e.target.value)}
                            value={replyTo} 
                            type="email" 
                            name="email" 
                            id="email"
                            required
                            placeholder='youremail@email.com'
                            className='px-2 py-1 my-6 outline-none border-b-2 border-gray-300 lg:w-96 md:w-80 w-54 text-base' />
                    </div>
                    <div className='grid'>
                        <label className='text-xl font-light' htmlFor="name">Name:</label>
                        <input 
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            name="name" 
                            id="name"
                            required
                            placeholder='Juan Dela Cruz'
                            className='px-2 py-1 my-6 outline-none border-b-2 border-gray-300 lg:w-96 md:w-80 w-54 text-base' />
                    </div>
                    <div className='grid'>
                        <label className='text-xl font-light' htmlFor="message">Message:</label>
                        <textarea 
                            onChange={(e) => setBody(e.target.value)}
                            name="message" 
                            id="mesage"
                            placeholder='Your message here...'
                            required
                            cols="20"
                            rows="5"
                            className='px-2 py-1 my-6 outline-none border-b-2 border-gray-300 lg:w-96 md:w-80 w-54 text-base'></textarea>
                    </div>
                    <button className='px-4 py-2 my-8 border-2 border-gray-300 hover:bg-gray-300 transition-all ease-linear'>Send message</button>
                </form>
                {status}
                {result && <p>Result: {result.message}</p>}
                {error}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Contact