import React, { useEffect, useState, lazy, useRef } from "react";

import {
  doc,
  getDoc
} from "firebase/firestore";
import { firestore, auth } from "../../utils/firebase";

import toast, { Toaster } from "react-hot-toast";
import helper from "../../assets/Employer/Single/helper.svg";
import phone from "../../assets/Employer/Single/call.svg";
import whatsapp from "../../assets/Employer/Single/whatsapp.svg";
import email from "../../assets/Employer/Single/mail.svg";
import location from "../../assets/Employer/Single/location.svg";
import cooking from "../../assets/Employer/Single/cooking.svg";
import otherskills from "../../assets/Employer/Single/otherskills.svg";
import salary from "../../assets/Employer/Single/salary.svg";
import accomodation from "../../assets/Employer/Single/accomodation.svg";
import date from "../../assets/Employer/Single/date.svg";
import contract from "../../assets/Employer/Single/contract.svg";
import experience from "../../assets/Employer/Single/experience.svg";
import holiday from "../../assets/Employer/Single/holiday.svg";
import language from "../../assets/Employer/Single/language.svg";
import skills from "../../assets/Employer/Single/mainSkills.svg";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

const SkeletonEmployerCardSingle = lazy(() =>
  import("../../components/Employer/Single/SkeletonEmployerCardSingle")
);

const ViewProfileEmployer = () => {

  const {id} = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchCalled = useRef(false);

  const userId = id;

  useEffect(() => {
    if (!fetchCalled.current) {
      fetchCalled.current = true;
      const fetchDetails = async () => {
        setLoading(true);
        try {
          const docRef = doc(firestore, `documents/${userId}_employer`);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUser(docSnap.data());
          }else{
            setError(true);
            toast.error("Error fetching document: ");
          }
        } catch (error) {
          setError(true);
          toast.error("Error fetching document: ");
        }
        setLoading(false);
      };

      fetchDetails();
    }
  }, [userId, auth.currentUser.uid, firestore]);

  const userDetails = {
    id: user.id,
    icon: user.image,
    heading: user.aboutJobEmployer?.jobTitle,

    fName: user.contactDetailsEmployer?.firstName,
    lName: user.contactDetailsEmployer?.lastName,

    PrimaryMobileNo: user.contactDetailsEmployer?.mobileNo,
    secondaryMobileNo: user.contactDetailsEmployer?.altMobileNo,
    WappMobileNo: user.contactDetailsEmployer?.WaMobileNo,
    EmailId: user.contactDetailsEmployer?.email,

    need: user.aboutJobEmployer?.jobDescription,
    nationality: user.aboutEmployer?.Nationality,
    size: user.aboutEmployer?.EmployerType,
    members: user.aboutEmployer?.FamilySize,
    language: user.skillsRequiredEmployer?.languages,
    experience: user.candidatePreferenceEmployer?.Experience,
    mainSkills: user.skillsRequiredEmployer?.mainSkills,
    cookingSkills: user.skillsRequiredEmployer?.cookingSkills,
    otherSkills: user.skillsRequiredEmployer?.otherSkills,
    salary: user.aboutEmployer?.Salary,
    accomodation: user.aboutEmployer?.Accomodation,
    country: user.jobOfferedEmployer?.jobLocationCountry,
    city: user.jobOfferedEmployer?.jobLocationCity,
    jobPosition: user.jobOfferedEmployer?.jobPosition,
    jobType: user.jobOfferedEmployer?.jobType,
    date: user.jobOfferedEmployer?.jobStartDate,
    holiday: user.aboutEmployer?.Holidays,
    contract: user.candidatePreferenceEmployer?.Contract,
  };
  
  const contactDetails = [
    { icon: phone, value: user?.contactDetailsEmployer?.altMobileNo, label: "Alternate Mobile" },
    { icon: whatsapp, value: user?.contactDetailsEmployer?.waMobileNo, label: "WhatsApp Mobile" },
    { icon: phone, value: user?.contactDetailsEmployer?.mobileNo, label: "Mobile" },
    { icon: email, value: user?.contactDetailsEmployer?.email, label: "Email" },
  ].filter(detail => detail.value);
  
  return (
    <>
      <Toaster />
      <Navbar />
      {loading ? (
        <SkeletonEmployerCardSingle />
      ) : error ? (
        <div className="text-center py-4">
          <p className="text-red-600 font-bold text-2xl">
            Error fetching user data. Please try again later.
          </p>
        </div>
      ) : (
        <div className="border-2 shadow-md">
          <div className="flex flex-col md:flex-row gap-5 p-8 pl-4">
            <div className="flex justify-center md:justify-start">
              <div
                className="w-40 h-40 rounded-full bg-cover bg-center mx-4 border-4 border-theme my-auto"
                style={{ backgroundImage: `url(${userDetails.icon})` }}
              ></div>
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-theme font-[600] line-clamp-1 tracking-wide text-[20px] mdnav:text-[24px] p-2 py-2">
                  Hey! I'm {userDetails.fName} {userDetails.lName}
                </h2>
              </div>
              <div>
                <h2 className="text-theme font-[400] line-clamp-1 tracking-wide text-[18px] mdnav:text-[22px] p-2 py-2">
                  {userDetails.heading}
                </h2>
              </div>
              <div className="text-theme font-[400] line-clamp-1 tracking-wide text-[18px] mdnav:text-[22px] p-2 py-2 	text-wrap: wrap">
                <p>
                  We're {userDetails.nationality} | {userDetails.size} | with{" "}
                  {userDetails.members}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
            <p className="text-[#053c84] font-[800] py-2 text-[18px]">
              Contact Details
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16 my-8 py-2">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex gap-4 space-y-4">
                <img src={detail.icon} alt={detail.label} className="w-6 md:w-8" />
                <p className="my-auto pb-3">{detail.value}</p>
              </div>
            ))}
          </div>

          {/* Employment offer Section */}
          <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
            <p className="text-[#053c84] font-[800] py-2 text-[18px]">
              Employment Offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16 my-8 py-2">
            <div className="space-y-4">
              <div className="flex gap-2">
                <img src={helper} alt="helper" className="w-6" />
                <p className="my-auto">{userDetails.jobType}</p>
              </div>
              <div className="flex gap-2">
                <img src={location} alt="location" className="w-6" />
                <p className="my-auto">{userDetails.country}</p>
              </div>
              <div className="flex gap-2">
                <img src={salary} alt="location" className="w-6" />
                <p className="my-auto">Salary: SAR {userDetails.salary}</p>
              </div>
              <div className="flex gap-2">
                <img src={accomodation} alt="accomodation" className="w-6" />
                <p className="my-auto">
                  Accomodation: {userDetails.accomodation}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <img src={date} alt="date" className="w-6" />
                <p className="my-auto">Start Before: {userDetails.date}</p>
              </div>
              <div className="flex gap-2">
                <img src={contract} alt="contract" className="w-6" />
                <p className="my-auto">
                  Contract Status: {userDetails.contract}
                </p>
              </div>
              <div className="flex gap-2">
                <img src={experience} alt="experience" className="w-6" />
                <p className="my-auto">
                  Required Experience: {userDetails.experience} years
                </p>
              </div>
              <div className="flex gap-2">
                <img src={holiday} alt="holiday" className="w-6" />
                <p className="my-auto">Days Off Given: {userDetails.holiday}</p>
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
            <p className="text-[#053c84] font-[800] py-2 text-[18px]">
              Job Description
            </p>
          </div>
          <div className="p-6 mx-16 my-8 py-2">{userDetails.need}</div>

          {/* Required Skills / Duties Section */}
          <div className="pl-6 bg-[rgba(5,74,132,0.20)]">
            <p className="text-[#053c84] font-[800] py-2 text-[18px]">
              Required Skills / Duties
            </p>
          </div>
          <div className="p-6 mx-16 my-8 py-2 space-y-4">
            <div className="flex gap-2">
              <img src={language} alt="language" />
              <div className="flex flex-col gap-2">
                <p className="text-[#054A84] font-[600]">Language</p>
                <div className="flex gap-2">
                  {userDetails.language?.map((item, index) => {
                    return (
                      <p key={index} className="border-2 p-1 md:p-1.5 rounded-[5px]">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={skills} alt="skills" />
              <div className="flex flex-col gap-2">
                <p className="text-[#054A84] font-[600]">Main skills</p>
                <div className="flex gap-2">
                  {userDetails.mainSkills?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="border-2 border-[#7A7A7A] p-1 md:p-1.5 rounded-[5px] bg-[#7A7A7A] text-white"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={cooking} alt="language" />
              <div className="flex flex-col gap-2">
                <p className="text-[#054A84] font-[600]">Cooking skills</p>
                <div className="flex gap-2">
                  {userDetails.cookingSkills?.map((item, index) => {
                    return (
                      <p key={index} className="border-2 p-1 md:p-1.5 rounded-[5px]">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={otherskills} alt="skills" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <p className="text-[#054A84] font-[600]">Other skills</p>
                <div className="flex gap-2">
                  {userDetails.otherSkills?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="border-2 border-[#7A7A7A] p-1 md:p-1.5 rounded-[5px] bg-[#7A7A7A] text-white"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ViewProfileEmployer;
