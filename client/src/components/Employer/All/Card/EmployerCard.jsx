import React from 'react'

import Employer from "../../../../assets/cardpic.svg"
import location from "../../../../assets/location.svg"
import experiencestar from "../../../../assets/experiencestar.svg"
import calender from "../../../../assets/calender.svg"
import active from "../../../../assets/active.svg"

const EmployerCard = () => {
    return (
        <div className='flex flex-row p-2 border-2 shadow-lg rounded-md gap-6'>
            <div className='w-1/4'>
                <div className="w-40 h-40 rounded-full bg-cover bg-center m-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${Employer})` }}></div>
            </div>
            <div className='space-y-2'>
                <div>
                    <p className='text-theme font-bold'>Dua Lipa - 32 yr</p>
                </div>
                <div className='flex flex-row gap-12'>
                    <p>Domestic Employer - Finished Contract</p>
                    <div className='flex flex-row gap-2'>
                        <img src={location} alt="location" className='w-3' />
                        <p className='text-theme font-semibold text-md my-auto'>Saudi Arabia</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repellat aspernatur possimus natus officiis commodi id animi magni. Velit assumenda perferendis tempora quibusdam voluptate nostrum omnis provident molestias! Eius!....</p>
                </div>
                <div className='flex flex-row space-x-6'>
                    <div className='flex flex-row items-center'>
                        <img src={experiencestar} alt="experiencestar" className='w-5 mr-1' />
                        <p className=''>3 yr Experience</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={calender} alt="calender" className='w-5 mr-2' />
                        <p>From 20th Dec 2023 | Full Time</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={active} alt="active" className='w-5 mr-2' />
                        <p>Very Active</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerCard