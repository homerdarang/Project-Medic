import React, { useState } from 'react'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

import { RiMailSendLine } from 'react-icons/ri';


function Contact() {
    const navigate = useNavigate;
    
    const [replyTo, setReplyTo] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    // const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const requestBody = {
            sendto: 'homerdarang@icloud.com',
            replyTo,
            name,
            message,
            isHtml: 'false'
        };

        const url = 'https://mail-sender-api1.p.rapidapi.com/';
        const option = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'aa4bb93377msh5b04192fb75f0a8p11c396jsn81fbd93a431d',
                'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            message: JSON.stringify(requestBody),
        };

        try {
            const response = await fetch(url, option);
            const result = await response.json();
            const status = response.ok ? 'Success' : 'Error';
            console.log(`Status: ${status}`)
            setResult(result)
            console.log(`APi response: ${result}`)
        } catch(err){
            setError(`Error: ${err}`)
        }
    };

    return (
        
        <>
            <div>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-medium text-blue-400 p-8 flex place-items-center'>
                    <RiMailSendLine className='text-blue-400 mr-2'/>
                    Send a message
                </h1>
                <form className='grid my-10' onSubmit={'/'}>
                    <div>
                        <label className='text-xl font-light' htmlFor="email">Your Email:</label>
                        <input
                            onChange={(e) => setReplyTo(e.target.value)}
                            value={replyTo} 
                            type="email" 
                            name="email" 
                            id="email"
                            required
                            placeholder='youremail@email.com'
                            className='block px-2 py-1 my-6 outline-none border-b-2 border-gray-300 lg:w-96 md:w-80 w-54 text-base' />
                    </div>
                    <div>
                        
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact