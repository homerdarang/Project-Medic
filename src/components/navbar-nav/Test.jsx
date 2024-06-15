import React from 'react';
import { Link } from 'react-router-dom';

function Test() {
    const selection = ['Home', 'About', 'Contact']

    return (
        <div>
            {selection.map((select) => (
                <Link key={select} to={`/contact/${select}`}>
                    All This is {select}
                </Link>
            ))}
        </div>
    )
}

export default Test