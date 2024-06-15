import { React, useEffect, useState } from 'react';
function Test2() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3031/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {/* <div className='py-5'>
                {records.map((list) => (
                    <>
                        <div key={list.id} className='list-none'>
                            <div className='flex place-items-center'>
                                <img className='w-12 h-12 border-2 border-white/30 me-2 rounded-full' src={list.avatar} alt="" />
                                <li>{`Name:${list.name}`}</li>
                            </div>
                            <div>
                                <li>{list.comment}</li>
                            </div>
                        </div>
                    </>
                ))
                }
            </div > */}
            <div className=' rounded-xl bg-red-200 py-5'>
                {records.map((usr) => (
                    <>
                        <div key={usr.id}>
                            <div className='grid place-items-center'>
                                <img className='h-12 w-12 rounded-full border-2 border-white/50' src={usr.avatar} alt="" />
                                <p>{usr.name}</p>
                            </div>
                            <div className='grid place-items-center'>
                                <p>{usr.comment}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </ >
    )
}
export default Test2