import React, { useEffect, useState } from 'react'

import location from "../../../../assets/location.svg"
import experiencestar from "../../../../assets/experiencestar.svg"
import calender from "../../../../assets/calender.svg"
import active from "../../../../assets/active.svg"

const HelperCard = ({ user }) => {
    const [load, setLoad] = useState(true);
    console.log(user);
    useEffect(() => {
        if (user) {
            setLoad(false);
        }
    }, [user]);

    return (
        <div className='flex flex-row p-2 border-2 shadow-lg rounded-md gap-6'>
            <div className='max-w-1/4 flex items-center'>
                <div className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${user.icon})` }}></div>
            </div>
            <div className='space-y-2 w-full'>
                <div>
                    <p className='font-bold text-[#054A84]'>{user.name} - {user.age} yr</p>
                </div>
                <div className='flex flex-row gap-12'>
                    <p className='font-bold text-[#666666]'>{user.jobType} - {user.status}</p>
                    <div className='flex flex-row gap-2'>
                        <img src={location} alt="location" className='w-3' />
                        <p className='font-semibold text-[#054A84] my-auto'>{user.location}</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <p className='break-all line-clamp-3'>{user.description}</p>
                </div>
                <div className='flex flex-row space-x-6 text-[#054A84] font-semibold'>
                    <div className='flex flex-row items-center'>
                        <img src={experiencestar} alt="experiencestar" className='w-5 mr-1' />
                        <p className='mt-1'>{user.experience} yr Experience</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={calender} alt="calender" className='w-5 mr-2' />
                        <p className='mt-1'>From {user.startDate} | {user.jobDuration}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={active} alt="active" className='w-5 mr-2' />
                        <p className='text-[#25AE88] mt-1'>{user.active}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HelperCard