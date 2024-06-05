import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../utils/firebase';

import toast, {Toaster} from 'react-hot-toast';

import helper from "../../../assets/Employer/Single/helper.svg";
import location from "../../../assets/Employer/Single/location.svg";
import otherSkills from "../../../assets/Helper/otherSkills.webp";
import cookingSkills from "../../../assets/Helper/cookingSkills.webp";
import date from "../../../assets/Employer/Single/date.svg";
import experience from "../../../assets/Employer/Single/experience.svg";

import experienceHelper from "../../../assets/Helper/experience.png";
import education from "../../../assets/Helper/education.png";
import salary from "../../../assets/Helper/salary.png";
import accomodation from "../../../assets/Helper/accomodation.png";
import daysOff from "../../../assets/Helper/daysOff.png";

import language from "../../../assets/Employer/Single/language.svg";
import skills from "../../../assets/Employer/Single/mainSkills.svg";
import SkeletonHelper from './SkeletonHelper';

const HelperCardSingle = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const { helperId } = useParams();
    const userId = helperId;

    useEffect(() => {
        const docRef = doc(firestore, `documents/${userId}`);

        const fetchUser = async () => {
            setLoading(true);
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const list = docSnap.data();
                    setUser(list);
                } else {
                    console.log("No such document!");
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user: ", error);
                toast.error("Error fetching user: ");
            }
        };

        return()=>fetchUser();
    }, []);

    console.log("user", user);

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

    const age = calculateAge(user.personalInfoHelper?.dob);
    const formatedDate = formatDateWithOrdinalAndShorthandMonth(user.professionalInfoHelper?.jobStartDate);

    console.log("userDetails", user);

    if (!user?.userId) {
        return <div>Invalid User Id.</div>
    };

    return (
        <>
            <Toaster />
            {loading ? (
                <SkeletonHelper />
            ) : (
                <div className="border-2 shadow-md">
                    <div className="flex gap-5 p-2 pl-4">
                        <div className="">
                            <div
                                className="w-32 h-32 rounded-full bg-cover bg-center mx-4 border-2 border-theme my-auto"
                                style={{ backgroundImage: `url(${user.image})` }}
                            ></div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="flex gap-2">
                                <h2 className="text-theme font-[600] line-clamp-1 tracking-wide text-[28px]">
                                    {user.personalInfoHelper.firstName} {user.personalInfoHelper.lastName}
                                </h2>
                                <h3 className="text-theme font-[500] line-clamp-1 tracking-wide text-[22px] mt-auto">
                                    ({age} Years)
                                </h3>
                            </div>
                            <div className="flex justify-between my-auto">
                                <div>
                                    <p className="text-[#053c84] font-[800] text-[20px]">
                                        {user.personalInfoHelper.gender.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.gender.slice(1)}{" "}
                                        | {/* Space after | */}
                                        {user.personalInfoHelper.educationLvl.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.educationLvl.slice(1)}{" "}
                                        | {/* Space after | */}
                                        {user.personalInfoHelper.nationality.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.nationality.slice(1)}{" "}
                                        | {/* Space after | */}
                                        {user.personalInfoHelper.religion.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.religion.slice(1)}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <button className="px-6 py-2 bg-[#123750] text-white rounded-[4px] hover:bg-blue-600 transition duration-300 my-auto">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">Professional Information</p>
                    </div>
                    <div className="grid grid-cols-12 mx-16 my-8">
                        <div className="col-span-12 md:col-span-6 w-full space-y-2">
                            <div className="flex gap-2">
                                <img src={helper} alt="helper" className="w-4" />
                                <p className="my-auto mt-1">
                                    {user.professionalInfoHelper.jobType} | {user.professionalInfoHelper.currentWorkStatus}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <img src={location} alt="location" className="w-4" />
                                <p className="my-auto mt-1">
                                    Preferred Location: {user.jobPreferenceHelper.preferredJobLocation}
                                </p>
                            </div>
                            {/* <div className='flex gap-2'>
                                <img src={salary} alt="location" className='w-4' />
                                <p className='my-auto'>Salary: SAR {userDetails.salary}</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={accomodation} alt="accomodation" className='w-4' />
                                <p className='my-auto'>Accomodation: {userDetails.accomodation}</p>
                            </div> */}
                        </div>
                        <div className="col-span-12 md:col-span-6 w-full space-y-2">
                            <div className="flex gap-2">
                                <img src={date} alt="date" className="w-4" />
                                <p className="my-auto mt-1">Start from {formatedDate}</p>
                            </div>
                            {/* <div className='flex gap-2'>
                                <img src={contract} alt="contract" className='w-4' />
                                <p className='my-auto'>Contract Status: {userDetails.contract}</p>
                            </div> */}
                            <div className="flex gap-2">
                                <img src={experience} alt="experience" className="w-4" />
                                <p className="my-auto mt-1">Required Experience: {user.professionalInfoHelper.yearsOfExperience} years</p>
                            </div>
                            {/* <div className='flex gap-2'>
                                <img src={holiday} alt="holiday" className='w-4' />
                                <p className='my-auto'>Days Off Given: {userDetails.holiday}</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">About Me</p>
                    </div>
                    <div className="p-6 pl-16">{user.aboutHelper.Text}</div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">Skills / Duties</p>
                    </div>
                    <div className="p-6 pl-16 space-y-4">
                        <div className="flex gap-2">
                            <img src={language} alt="language" className="w-10 h-10 my-auto" />
                            <div className="flex flex-col gap-2">
                                <p className="text-[#054A84] font-[600]">Language</p>
                                <div className="flex gap-2">
                                    {user.skillsSelectedByHelper?.languages?.map((item, index) => {
                                        return (
                                            <p key={index} className="border-2 p-1.5 rounded-[5px]">
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={skills} alt="skills" className="w-10 h-10 my-auto" />
                            <div className="flex flex-col gap-2">
                                <p className="text-[#054A84] font-[600]">Main skills</p>
                                <div className="flex gap-2">
                                    {user.skillsSelectedByHelper?.mainSkills?.map((item, index) => {
                                        return (
                                            <p key={index} className="border-2 border-[#7A7A7A] p-1.5 rounded-[5px] bg-[#7A7A7A] text-white">
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={cookingSkills} alt="cookingSkills" className="w-10 h-10 my-auto" />
                            <div className="flex flex-col gap-2">
                                <p className="text-[#054A84] font-[600]">Cooking skills</p>
                                <div className="flex gap-2">
                                    {user.skillsSelectedByHelper?.cookingSkills?.map((item, index) => {
                                        return (
                                            <p key={index} className="border-2 border-[#7A7A7A] p-1.5 rounded-[5px] bg-[#7A7A7A] text-white">
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img src={otherSkills} alt="otherSkills" className="w-10 h-10 my-auto" />
                            <div className="flex flex-col gap-2">
                                <p className="text-[#054A84] font-[600]">Other skills</p>
                                <div className="flex gap-2">
                                    {user.skillsSelectedByHelper?.otherSkills?.map((item, index) => {
                                        return (
                                            <p key={index} className="border-2 border-[#7A7A7A] p-1.5 rounded-[5px] bg-[#7A7A7A] text-white">
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">Work Experience</p>
                    </div>
                    <div className="flex p-6 py-4 pl-16 space-y-4 gap-3">
                        <div className="bg-white p-4 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={experienceHelper} alt="Company Logo" className="w-10 h-10 mb-auto mt-2" /> {/* Assuming you have companyLogo */}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    {/* <span className="text-gray-500">From: </span> */}
                                    {formatDateWithOrdinalAndShorthandMonth(user.workExperienceHelper?.StartDate)} | {user.workExperienceHelper?.Experience} years
                                </p>
                                <p>
                                    {/* <span className="text-gray-500">In: </span> */}
                                    {user.workExperienceHelper?.Country}
                                </p>
                                <div>
                                    {/* <span className="text-gray-500">As: </span> */}
                                    <ul className="flex flex-wrap gap-2">
                                        {/* {user.workExperienceHelper?.Skills?.map((item, index) => (
                                            <li key={index} className="border border-[#7A7A7A] p-1 rounded-[5px] bg-[#7A7A7A] text-white">
                                                {item}
                                            </li>
                                        ))} */}
                                        {user.workExperienceHelper?.Skills}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">Education</p>
                    </div>
                    <div className="flex p-6 py-4 pl-16 space-y-4 gap-3">
                        <div className="bg-white p-4 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={education} alt="education" className="w-10 h-10 mb-auto mt-2" /> {/* Assuming you have companyLogo */}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    {user.educationHelper?.Duration} years
                                </p>
                                <p>
                                    {/* <span className="text-gray-500">In: </span> */}
                                    {user.educationHelper?.Country}
                                </p>
                                <div>
                                    Education {user.educationHelper?.LevelofEducation}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
                        <p className="text-[#053c84] font-[800] py-2 text-[18px]">My Expectations</p>
                    </div>
                    <div className="flex flex-col p-6 py-4 pl-16 space-y-1 gap-3">
                        <div className="bg-white p-2 space-y-2 flex gap-4">
                            <div className="flex items-center space-x-2">
                                <img src={salary} alt="salary" className="w-10 h-10 mb-auto mt-2" /> {/* Assuming you have companyLogo */}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    Salary: 
                                </p>
                                <p>
                                    {user.jobPreferenceHelper?.expectedSalary} SAR
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-2 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={accomodation} alt="accomodation" className="w-10 h-10 mb-auto mt-2" /> {/* Assuming you have companyLogo */}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    Accomodation:
                                </p>
                                <p>
                                    {user.jobPreferenceHelper?.accomodationPreference}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-2 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={daysOff} alt="daysOff" className="w-10 h-10 mb-auto mt-2" /> {/* Assuming you have companyLogo */}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    Days Off:
                                </p>
                                <p>
                                    {user.jobPreferenceHelper?.dayOffPreference}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HelperCardSingle;
