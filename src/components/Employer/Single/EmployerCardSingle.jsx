import React, { useEffect, useState, lazy } from 'react'

import { doc, getDoc, collection, getDocs, query, where, updateDoc, arrayUnion } from 'firebase/firestore';
import { firestore, auth } from '../../../utils/firebase';

import toast, {Toaster} from 'react-hot-toast';

import helper from "../../../assets/Employer/Single/helper.svg"
import location from "../../../assets/Employer/Single/location.svg"
import salary from "../../../assets/Employer/Single/salary.svg"
import accomodation from "../../../assets/Employer/Single/accomodation.svg"
import date from "../../../assets/Employer/Single/date.svg"
import contract from "../../../assets/Employer/Single/contract.svg"
import experience from "../../../assets/Employer/Single/experience.svg"
import holiday from "../../../assets/Employer/Single/holiday.svg"

import language from "../../../assets/Employer/Single/language.svg"
import skills from "../../../assets/Employer/Single/mainSkills.svg"
import { update } from 'firebase/database';

const SkeletonEmployerCardSingle = lazy(() => import('./SkeletonEmployerCardSingle'));

const EmployerCardSingle = ({ employerId }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [allow, setAllow] = useState(true);

    const userId = employerId;

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const docRef = doc(firestore, `documents/${userId}_employer`);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const list = docSnap.data();
                    setUser(list);
                } else {
                    setError(true);
                }

                const documentsRef = collection(firestore, 'documents');
                const q = query(documentsRef, where('userId', '==', auth.currentUser.uid));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    if (querySnapshot.docs[0].data().role === "employer") {
                        setAllow(false);
                        toast.error('Employers Can Not Apply to Employers', {
                            duration: 4000,
                            className: 'bg-red-200',
                            iconTheme: {
                                primary: '#ff0000',
                                secondary: '#FFFAEE',
                            }
                        });
                    }
                }
            } catch (error) {
                setError(true);
                toast.error("Error fetching document: ");
            }
            setLoading(false);
        };

        return()=>fetchDetails();
    }, [userId, auth.currentUser.uid, firestore]);

    const userDetails = {
        id: user.id,
        icon: user.image,
        heading: user.aboutJobEmployer?.jobTitle,
        need: user.aboutJobEmployer?.jobDescription,
        nationality: user.aboutEmployer?.Nationality,
        size: "Family",
        members: user.aboutEmployer?.FamilySize,
        language: user.skillsRequiredEmployer?.languages,
        experience: user.candidatePreferenceEmployer?.Experience,
        mainSkills: user.skillsRequiredEmployer?.mainSkills,
        salary: user.aboutEmployer?.Salary,
        accomodation: user.aboutEmployer?.Accomodation,
        country: user.jobOfferedEmployer?.jobLocationCountry,
        city: user.jobOfferedEmployer?.jobLocationCity,
        jobPosition: user.jobOfferedEmployer?.jobPosition,
        jobType: user.jobOfferedEmployer?.jobType,
        date: user.jobOfferedEmployer?.jobStartDate,
        holiday: user.aboutEmployer?.Holidays,
        contract: user.candidatePreferenceEmployer?.Contract
    };

    const handleClick = () => {
        if (!allow) {
            toast.error('Employers Can Not Apply to Employers', {
                duration: 4000,
                className: 'bg-red-200',
                iconTheme: {
                    primary: '#ff0000',
                    secondary: '#FFFAEE',
                }
            });
        }else {
            const UpdateApplication = async () => {
                const docRef = doc(firestore, `documents/${auth.currentUser.uid}_helper`);
                try {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        const applications = data.applications?.Id || [];
                        
                        // Check if the ID already exists in the array
                        if (!applications.includes(userId.split('_')[0])) {
                            await updateDoc(docRef, {
                                'applications.Id': arrayUnion(userId.split('_')[0])
                            });
                            toast.success('Application Submitted', {
                                duration: 4000,
                                className: 'bg-green-200',
                                iconTheme: {
                                    primary: '#10B981',
                                    secondary: '#ECFDF5',
                                }
                            });
        
                            // Check if the array has more than 2 users
                            if (applications.length + 1 > 1) {
                                // Handle the case where there are more than 2 users
                                toast.error('More than 2 applications', {
                                    duration: 4000,
                                    className: 'bg-yellow-200',
                                    icon: '⚠️'
                                });
                            }
                        } else {
                            toast.success('Application already exists', {
                                duration: 4000,
                                style: { background: '#EFF6FF', color: '#3B82F6' },
                                icon: 'ℹ️'
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error updating document:', error);
                }
            } 
            UpdateApplication();
        }
    }

    return (
        <>
            <Toaster />
            {loading ? (<SkeletonEmployerCardSingle />) :  error ? (
                <div className="text-center py-4">
                    <p className="text-red-600 font-bold text-2xl">Error fetching user data. Please try again later.</p>
                </div>
            ) : (<div className='border-2 shadow-md'>
                <div className='flex gap-5 p-6 pl-12'>
                    <div className=''>
                        <div className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${userDetails.icon})` }}></div>
                    </div >
                    <div className='w-full space-y-1'>
                        <div>
                            <h2 className='text-theme font-[600] line-clamp-1 tracking-wide text-[24px]'>{userDetails.heading}</h2>
                        </div>
                        <div>
                            <p>{userDetails.nationality} | {userDetails.size} | with {userDetails.members}</p>
                        </div>
                        <div className='flex justify-between'>
                            {/* <p className='my-auto'>Posted {userDetails.time} hours ago</p> */}
                            <button className={`px-6 py-2 bg-[#123750] ${!allow ? "cursor-not-allowed bg-slate-400 hover:bg-slate-500" : ""} text-white rounded-[4px] hover:bg-blue-600 transition duration-300 my-auto`} onClick={handleClick}>
                                Apply
                            </button>
                        </div>
                    </div>
                </div >
                <div className='pl-6 bg-[rgba(5,74,132,0.20)]'>
                    <p className='text-[#053c84] font-[800] py-2 text-[18px]'>Job Requirement</p>
                </div>
                <div className='grid grid-cols-12 mx-16 my-8'>
                    <div className='col-span-12 md:col-span-6 w-full space-y-2'>
                        <div className='flex gap-2'>
                            <img src={helper} alt="helper" className='w-4' />
                            <p className='my-auto'>{userDetails.jobPosition} | {userDetails.jobType}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={location} alt="location" className='w-4' />
                            <p className='my-auto'>{userDetails.city} ,{userDetails.country}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={salary} alt="location" className='w-4' />
                            <p className='my-auto'>Salary: SAR {userDetails.salary}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={accomodation} alt="accomodation" className='w-4' />
                            <p className='my-auto'>Accomodation: {userDetails.accomodation}</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6 w-full space-y-2'>
                        <div className='flex gap-2'>
                            <img src={date} alt="date" className='w-4' />
                            <p className='my-auto'>Start Before: {userDetails.date}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={contract} alt="contract" className='w-4' />
                            <p className='my-auto'>Contract Status: {userDetails.contract}</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={experience} alt="experience" className='w-4' />
                            <p className='my-auto'>Required Experience: {userDetails.experience} years</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={holiday} alt="holiday" className='w-4' />
                            <p className='my-auto'>Days Off Given: {userDetails.holiday}</p>
                        </div>
                    </div>
                </div>
                <div className='pl-6 bg-[rgba(5,74,132,0.20)]'>
                    <p className='text-[#053c84] font-[800] py-2 text-[18px]'>Job Description</p>
                </div>
                <div className='p-6 pl-16'>
                    {userDetails.need}
                </div>
                <div className='pl-6 bg-[rgba(5,74,132,0.20)]'>
                    <p className='text-[#053c84] font-[800] py-2 text-[18px]'>Required Skills / Duties</p>
                </div>
                <div className='p-6 pl-16 space-y-4'>
                    <div className='flex gap-2'>
                        <img src={language} alt="language" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#054A84] font-[600]'>Language</p>
                            <div className='flex gap-2'>
                                {userDetails.language?.map((item, index) => {
                                    return (
                                        <p key={index} className='border-2 p-1.5 rounded-[5px]'>{item}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img src={skills} alt="skills" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#054A84] font-[600]'>Main skills</p>
                            <div className='flex gap-2'>
                                {userDetails.mainSkills?.map((item, index) => {
                                    return (
                                        <p key={index} className='border-2 border-[#7A7A7A] p-1.5 rounded-[5px] bg-[#7A7A7A] text-white'>{item}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >)}
        </>
    );
}

export default EmployerCardSingle