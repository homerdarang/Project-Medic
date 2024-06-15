import React, { useState } from 'react';


function Dashboard() {
    const [sideBar, setSideBar] = useState(false)
    const dashboardItems = ['Dashboard', 'Records', 'Consultation', 'Settings', 'Account'];

    const handleSideBar = function () {
        setSideBar(prevSideBar => !prevSideBar)
    }

    const navItems = dashboardItems.map((navs) => {
        return (
            <div>
                <ul>
                    <li className='border-[1px] px-2 py-1 w-36 border-blue-300 cursor-pointer hover:shadow-blue-500/50 hover:shadow-lg hover:bg-white/35 rounded-md mx-1 my-3 transition-all ease-linear active:scale-95'>
                        {navs}
                    </li>
                </ul>
            </div >
        )
    })


    return (
        <div>
            <div className='text-white absolute top-40 left-10 bg-white/15 rounded-md lg:w-80 px-3 py-1 backdrop-blur-sm'>
                {navItems}
            </div>
        </div>
    )
}

export default Dashboard