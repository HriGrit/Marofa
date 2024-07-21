import React, { useEffect, useState, lazy, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { firestore, auth } from '../../utils/firebase';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

import toast, {Toaster} from 'react-hot-toast';

import helper from "../../assets/Employer/Single/helper.svg";
import location from "../../assets/Employer/Single/location.svg";
import otherSkills from "../../assets/Helper/otherSkills.webp";
import cookingSkills from "../../assets/Helper/cookingSkills.webp";
import date from "../../assets/Employer/Single/date.svg";
import experience from "../../assets/Employer/Single/experience.svg";

import experienceHelper from "../../assets/Helper/experience.png";
import education from "../../assets/Helper/education.png";
import salary from "../../assets/Helper/salary.png";
import accomodation from "../../assets/Helper/accomodation.png";
import daysOff from "../../assets/Helper/daysOff.png";

import email from "../../assets/Employer/Single/mail.svg";
import phone from "../../assets/Employer/Single/call.svg";
import whatsapp from  "../../assets/Employer/Single/whatsapp.svg";

import language from "../../assets/Employer/Single/language.svg";
import skills from "../../assets/Employer/Single/mainSkills.svg";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

const SkeletonHelper = lazy(() => import('../../components/Helper/Single/SkeletonHelper'));

const ViewProfileHelper = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchCalled = useRef(false);

    const {id} = useParams();

    const userId = id;

    useEffect(() => {
        if (!fetchCalled.current) {
            fetchCalled.current = true;
            const fetchDetails = async () => {
                setLoading(true);
                try {
                    const docRef = doc(firestore, `documents/${userId}_helper`);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setUser(docSnap.data());
                    }
                } catch (error) {
                    toast.error("Error fetching document: ");
                }
                setLoading(false);
            };

            fetchDetails();
        }
    }, [userId]);


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

    const contactDetails = [
      { icon: phone, value: user?.contactDetailsHelper?.altMobileNo, label: "Alternate Mobile" },
      { icon: whatsapp, value: user?.contactDetailsHelper?.waMobileNo, label: "WhatsApp Mobile" },
      { icon: phone, value: user?.contactDetailsHelper?.mobileNo, label: "Mobile" },
      { icon: email, value: user?.contactDetailsHelper?.email, label: "Email" },
    ].filter(detail => detail.value);
    
    return (
        <>
            <Navbar />
            <Toaster />
            {loading ? (
                <SkeletonHelper />
            ) : error ? (
                <div className="text-center py-4">
                    <p className="text-red-600 font-bold text-2xl">Error fetching user data. Please try again later.</p>
                </div>
            ) : (
                <div className="border-2 shadow-md w-full">
                    <div className="flex flex-col sm:flex-row gap-5 p-8">
                        <div className="flex justify-center sm:justify-start">
                            <div
                                className="w-32 h-32 rounded-full bg-cover bg-center border-2 border-theme"
                                style={{ backgroundImage: `url(${user.image})` }} />
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="flex flex-col sm:flex-row gap-2 text-center">
                                <h2 className="text-theme font-semibold line-clamp-1 tracking-wide text-xl sm:text-2xl lg:text-3xl">
                                    {user.personalInfoHelper?.firstName} {user.personalInfoHelper?.lastName}
                                </h2>
                                <h3 className="text-theme font-medium line-clamp-1 tracking-wide text-lg sm:text-xl lg:text-2xl mt-auto">
                                    ({age} Years)
                                </h3>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between my-auto mt-4 sm:mt-0">
                                <div className='text-center'>
                                    <p className="text-blue-900 font-extrabold text-lg sm:text-xl lg:text-2xl">
                                        {user.personalInfoHelper.gender.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.gender.slice(1)}{" "}
                                        | {user.personalInfoHelper.educationLvl.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.educationLvl.slice(1)}{" "}
                                        | {user.personalInfoHelper.nationality.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.nationality.slice(1)}{" "}
                                        | {user.personalInfoHelper.religion.charAt(0).toUpperCase() +
                                            user.personalInfoHelper.religion.slice(1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">Professional Information</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-4 sm:mx-16 my-8">
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <img src={helper} alt="helper" className="w-4" />
                                <p className="my-auto mt-1">{user.professionalInfoHelper.jobType} | {user.professionalInfoHelper.currentWorkStatus}</p>
                            </div>
                            <div className="flex gap-2">
                                <img src={location} alt="location" className="w-4" />
                                <p className="my-auto mt-1">Preferred Location: {user.jobPreferenceHelper.preferredJobLocation}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <img src={date} alt="date" className="w-4" />
                                <p className="my-auto mt-1">Start from {formatedDate}</p>
                            </div>
                            <div className="flex gap-2">
                                <img src={experience} alt="experience" className="w-4" />
                                <p className="my-auto mt-1">Required Experience: {user.professionalInfoHelper.yearsOfExperience} years</p>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">Contact Details</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16 my-8 py-2">
                      {contactDetails.map((detail, index) => (
                        <div key={index} className="flex gap-4 space-y-4">
                          <img src={detail.icon} alt={detail.label} className="w-6 md:w-8" />
                          <p className="my-auto pb-3">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">About Me</p>
                    </div>
                    <div className="p-6 pl-4 sm:pl-16">{user.aboutHelper.Text}</div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">Skills / Duties</p>
                    </div>
                    <div className="p-6 pl-4 sm:pl-16 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <img src={language} alt="language" className="w-10 h-10" />
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-900 font-semibold">Language</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsSelectedByHelper?.languages?.map((item, index) => (
                                        <p key={index} className="border-2 p-1.5 rounded">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <img src={skills} alt="skills" className="w-10 h-10" />
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-900 font-semibold">Main skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsSelectedByHelper?.mainSkills?.map((item, index) => (
                                        <p key={index} className="border-2 border-gray-600 p-1.5 rounded bg-gray-600 text-white">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <img src={cookingSkills} alt="cookingSkills" className="w-10 h-10" />
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-900 font-semibold">Cooking skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsSelectedByHelper?.cookingSkills?.map((item, index) => (
                                        <p key={index} className="border-2 border-gray-600 p-1.5 rounded bg-gray-600 text-white">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <img src={otherSkills} alt="otherSkills" className="w-10 h-10" />
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-900 font-semibold">Other skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {user.skillsSelectedByHelper?.otherSkills?.map((item, index) => (
                                        <p key={index} className="border-2 border-gray-600 p-1.5 rounded bg-gray-600 text-white">{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">Work Experience</p>
                    </div>
                    <div className="p-6 py-4 pl-4 sm:pl-16 space-y-4 gap-3">
                        <div className="bg-white p-4 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={experienceHelper} alt="Company Logo" className="w-10 h-10 mb-auto mt-2" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>
                                    {formatDateWithOrdinalAndShorthandMonth(user.workExperienceHelper?.StartDate)} | {user.workExperienceHelper?.Experience} years
                                </p>
                                <p>
                                    {user.workExperienceHelper?.Country}
                                </p>
                                <div>
                                    <ul className="flex flex-wrap gap-2">
                                        {user.workExperienceHelper?.Skills}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">Education</p>
                    </div>
                    <div className="p-6 py-4 pl-4 sm:pl-16 space-y-4 gap-3">
                        <div className="bg-white p-4 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={education} alt="education" className="w-10 h-10 mb-auto mt-2" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>{user.educationHelper?.Duration} years</p>
                                <p>{user.educationHelper?.Country}</p>
                                <div>Education {user.educationHelper?.LevelofEducation}</div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 bg-blue-200">
                        <p className="text-blue-900 font-extrabold py-2 text-lg sm:text-xl">My Expectations</p>
                    </div>
                    <div className="flex flex-col p-6 py-4 pl-4 sm:pl-16 space-y-1 gap-3">
                        <div className="bg-white p-2 space-y-2 flex gap-4">
                            <div className="flex items-center space-x-2">
                                <img src={salary} alt="salary" className="w-10 h-10 mb-auto mt-2" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>Salary:</p>
                                <p>{user.jobPreferenceHelper?.expectedSalary} SAR</p>
                            </div>
                        </div>
                        <div className="bg-white p-2 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={accomodation} alt="accomodation" className="w-10 h-10 mb-auto mt-2" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>Accomodation:</p>
                                <p>{user.jobPreferenceHelper?.accomodationPreference}</p>
                            </div>
                        </div>
                        <div className="bg-white p-2 space-y-2 flex gap-2">
                            <div className="flex items-center space-x-2">
                                <img src={daysOff} alt="daysOff" className="w-10 h-10 mb-auto mt-2" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <p>Days Off:</p>
                                <p>{user.jobPreferenceHelper?.dayOffPreference}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default ViewProfileHelper;
