import React from 'react'
import Footer from '../Footer'

function Contact() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('Submitted!');
    }

    return (
        <>
            <div className='my-60 w-1/4 m-auto'>
                <h1 className='font-bold text-4xl text-blue-400 my-3'>Message Us!</h1>
                <form className='grid' onSubmit={handleSubmit}>
                    <label className='font-light text-gray-600 mt-7' htmlFor="name">Full Name</label>
                    <input className='form-input px-4 py-3 border-b-[2px] border-gray-400 font-extralight focus:outline-none'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Juan Dela Cruz' />

                    <label className='font-light text-gray-600 mt-7' htmlFor="email">Email</label>
                    <input className='form-input px-4 py-3 border-b-[2px] border-gray-400 font-extralight focus:outline-none'
                        type="email"
                        name="email"
                        id="email"
                        placeholder='juan@email.com' />

                    <label className='font-light text-gray-600 mt-7' htmlFor="comment">Comment here:</label>
                    <textarea className='form-textarea px-4 py-3 border-b-[2px] border-gray-400 font-extralight focus:outline-none'
                        name="comment"
                        id="comment"
                        cols="30"
                        placeholder='You are doing great!'></textarea>

                    <button className='mt-7 px-4 py-3 bg-blue-400 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition-all ease-linear'>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact