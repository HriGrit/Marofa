import React, { useState, useEffect } from 'react'

import Employer from "../../../../assets/cardpic.svg"
import location from "../../../../assets/location.svg"
import experiencestar from "../../../../assets/experiencestar.svg"
import calender from "../../../../assets/calender.svg"
import active from "../../../../assets/active.svg"

const EmployerCard = ({ user }) => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        if (user) {
            setLoad(false);
        }
    }, [user]);

    return (
        <div className={`flex p-2 border-2 shadow-sm rounded-md mr-16 gap-4`}>
            <div className='max-w-1/4 flex items-center'>
                <div className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${user.icon})` }}></div>
            </div>
            <div className='flex flex-col justify-between w-full'>
                <div className='space-y-1.5'>
                    <div>
                        <p className='text-theme font-bold line-clamp-1'>{user.heading}</p>
                    </div>
                    <div className='flex gap-12'>
                        <p className='font-bold text-[#666666]'>{user.size} | {user.nationality}</p>
                        <div className='flex gap-2'>
                            <img src={location} alt="location" className='w-3' />
                            <p className='text-theme font-semibold text-md mb-auto '>{user.nationality}</p>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='break-all line-clamp-3'>{user.need}ierugoslvenjgr tugntgohenrtgh3 479ty347ierugoslvenjgr tugntgohenrtgh3</p>
                    </div>
                </div>
                <div className='flex space-x-6 text-[#054A84] font-semibold'>
                    <div className='flex items-center gap-2'>
                        <img src={experiencestar} alt="experiencestar" className='w-5' />
                        <p className='mt-1'>{user.jobPosition}  | {user.jobType}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={calender} alt="calender" className='w-5 mr-2' />
                        <p className='my-auto mt-1'>Before {user.startDate}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={active} alt="active" className='w-5' />
                        <p className='my-auto mt-1 text-[#25AE88]'>{user.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerCard
