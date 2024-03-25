// import React, { useState, useEffect } from 'react'

// import Employer from "../../../../assets/cardpic.svg"
// import location from "../../../../assets/location.svg"
// import experiencestar from "../../../../assets/experiencestar.svg"
// import calender from "../../../../assets/calender.svg"
// import active from "../../../../assets/active.svg"

// const EmployerCard = ({ user }) => {
//     const [load, setLoad] = useState(true);

//     useEffect(() => {
//         if (user) {
//             setLoad(false);
//         }
//     }, [user]);

//     return (
//         <div className={`${load ? "animate-pulse" : ""}flex p-2 border-2 shadow-sm rounded-md gap-2 mr-16`}>
//             <div className='w-1/4 flex items-center'>
//                 <div className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${user.icon})` }}></div>
//             </div>
//             <div className='space-y-2'>
//                 <div>
//                     <p className='text-theme font-bold line-clamp-1'>{user.heading}</p>
//                 </div>
//                 <div className='flex gap-12'>
//                     <p>{user.size} | {user.nationality}</p>
//                     <div className='flex gap-2'>
//                         <img src={location} alt="location" className='w-3' />
//                         <p className='text-theme font-semibold text-md mb-auto '>{user.nationality}</p>
//                     </div>
//                 </div>
//                 <div className='mb-4'>
//                     <p className='line-clamp-3'>{user.need}</p>
//                 </div>
//                 <div className='flex space-x-6'>
//                     <div className='flex items-center gap-2'>
//                         <img src={experiencestar} alt="experiencestar" className='w-5' />
//                         <p className='mt-1'>{user.jobPosition}  | {user.jobType}</p>
//                     </div>
//                     <div className='flex items-center gap-1'>
//                         <img src={calender} alt="calender" className='w-5 mr-2' />
//                         <p className='my-auto mt-1'>Before {user.startDate}</p>
//                     </div>
//                     <div className='flex items-center gap-1'>
//                         <img src={active} alt="active" className='w-5' />
//                         <p className='my-auto mt-1'>{user.status}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EmployerCard
import React, { useState, useEffect } from 'react';

import EmployerPlaceholder from "../../../../assets/cardpic.svg"; // Placeholder image
import location from "../../../../assets/location.svg";
import experiencestar from "../../../../assets/experiencestar.svg";
import calender from "../../../../assets/calender.svg";
import active from "../../../../assets/active.svg";

const EmployerCard = ({ user }) => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        if (user) {
            setLoad(false);
        }
    }, [user]);

    const loadingClass = load ? "animate-pulse" : "";

    return (
        <div className={`flex p-2 border-2 shadow-sm rounded-md gap-2 mr-16`}>
            <div className={`w-1/4 flex items-center`}>
                <div className={`w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto`} style={{ backgroundImage: `url(${load ? "animate-pulse" : user.icon})` }}></div>
            </div>
            <div className={`space-y-2 ${loadingClass}`}>
                <div className='min-w-1/2 bg-red-200'>
                    <p className={`text-theme font-bold line-clamp-1 ${load ? "animate-pulse" : ""}`}>{user.heading}</p>
                </div>
                <div className='flex gap-12'>
                    <p>{load ? "Loading..." : `${user.size} | ${user.nationality}`}</p>
                    <div className='flex gap-2'>
                        <img src={location} alt="location" className='w-3' />
                        <p className='text-theme font-semibold text-md mb-auto'>{load ? "Loading..." : user.nationality}</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <p className='line-clamp-3'>{load ? "Loading description..." : user.need}</p>
                </div>
                <div className='flex space-x-6'>
                    <div className='flex items-center gap-2'>
                        <img src={experiencestar} alt="experiencestar" className='w-5' />
                        <p className='mt-1'>{load ? "Loading..." : `${user.jobPosition}  | ${user.jobType}`}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={calender} alt="calender" className='w-5 mr-2' />
                        <p className='my-auto mt-1'>{load ? "Loading..." : `Before ${user.startDate}`}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={active} alt="active" className='w-5' />
                        <p className='my-auto mt-1'>{load ? "Loading..." : user.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerCard;
