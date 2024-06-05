import React, { useEffect, useState } from 'react'

import location from "../../../../assets/location.svg"
import experiencestar from "../../../../assets/experiencestar.svg"
import calender from "../../../../assets/calender.svg"
import active from "../../../../assets/active.svg"

import { useNavigate } from 'react-router-dom'

const HelperCard = ({ user }) => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        if (user) {
            setLoad(false);
        }
    }, [user]);

    const handleClick = () => {
        navigate(`/helpers/${user.id}`);
    }

    function calculateAge(dateOfBirthString) {
        if (!dateOfBirthString || !Date.parse(dateOfBirthString)) {
          return "Age";
        }
      
        const dob = new Date(dateOfBirthString);
        const today = new Date();
      
        const dobYear = dob.getFullYear();
        const dobMonth = dob.getMonth();
        const dobDay = dob.getDate();
      
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
      
        let age = todayYear - dobYear;
      
        if (todayMonth < dobMonth || (todayMonth === dobMonth && todayDay < dobDay)) {
          age--;
        }
      
        return age;
    }

    function formatDateWithOrdinalAndShorthandMonth(dateString) {
        if (!dateString || !Date.parse(dateString)) {
          return "Invalid Date";
        }
      
        const date = new Date(dateString);
      
        const day = date.getDate();
        const month = date.getMonth(); 
        const year = date.getFullYear();
      
        const suffixes = ["st", "nd", "rd", "th"];
        const ordinalSuffix = suffixes[day % 10] || suffixes[day % 100 > 10 && day % 100 < 20 ? 1 : 0];
      
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthString = months[month];
      
        return `${day}${ordinalSuffix} ${monthString} ${year}`;
      }
      
    
    const age = calculateAge(user.personalInfoHelper.dob);
    const formatedDate = formatDateWithOrdinalAndShorthandMonth(user.professionalInfoHelper.jobStartDate);
      
    return (
        <div className='flex flex-row p-2 border-2 shadow-lg rounded-md gap-6 cursor-pointer' onClick={handleClick}>
            <div className='max-w-1/4 flex items-center'>
                <div className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${user.image})` }}></div>
            </div>
            <div className='space-y-2 w-full'>
                <div>
                    <p className='font-bold text-[#054A84]'>{user.personalInfoHelper.firstName} {user.personalInfoHelper.lastName} - {age} yr</p>
                </div>
                <div className='flex flex-row gap-6'>
                    <p className='font-bold text-[#666666]'>{user.professionalInfoHelper.jobType} - {user.professionalInfoHelper.currentWorkStatus}</p>
                    <div className='flex flex-row gap-2'>
                        <img src={location} alt="location" className='w-3 mb-1' />
                        <p className='font-semibold text-[#054A84]'>{user.personalInfoHelper.nationality}</p>
                    </div>
                </div>
                <div className=''>
                    <div className='mb-4'>
                        <p className='break-all line-clamp-3'>{user.aboutHelper.Text}</p>
                    </div>
                    <div className='flex flex-row space-x-6 text-[#054A84] font-semibold'>
                        <div className='flex flex-row items-center'>
                            <img src={experiencestar} alt="experiencestar" className='w-5 mr-1' />
                            <p className='mt-1'>{user?.professionalInfoHelper?.yearsOfExperience} yr Experience</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={calender} alt="calender" className='w-5 mr-2' />
                            <p className='mt-1'>From {formatedDate}</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={active} alt="active" className='w-5 mr-2' />
                            <p className='text-[#25AE88] mt-1'>Very Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HelperCard