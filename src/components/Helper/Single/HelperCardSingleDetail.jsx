import React, { useEffect, useState, lazy, useRef } from "react";
import { useParams } from "react-router-dom";
import { firestore, auth } from "../../../utils/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";

import toast, { Toaster } from "react-hot-toast";

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
const SkeletonHelper = lazy(() => import("./SkeletonHelper"));

const HelperCardSingleDetail = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allow, setAllow] = useState(true);
  const fetchCalled = useRef(false);

  const { helperId } = useParams();
  const userId = helperId;

  const setApplication = async () => {
    const docRef = doc(firestore, `documents/${helperId}`);
    const docSnap = await getDoc(docRef);
    const uid = auth.currentUser.uid;
    if (docSnap.exists()) {
      const updatedData = {
        ...docSnap.data(),
        applied: {
          ...docSnap.data().applied,
          Id: [...docSnap.data().applied.Id, uid].filter(
            (id, index, self) => self.indexOf(id) === index
          ),
        },
      };
      await setDoc(docRef, updatedData);
    }
  };

  useEffect(() => {
    if (!fetchCalled.current) {
      fetchCalled.current = true;
      const fetchDetails = async () => {
        setLoading(true);
        try {
          const docRef = doc(firestore, `documents/${userId}`);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUser(docSnap.data());
          } else {
            console.log("No such document!");
            setError(true);
          }

          const documentsRef = collection(firestore, "documents");
          const q = query(
            documentsRef,
            where("userId", "==", auth.currentUser.uid)
          );
          const querySnapshot = await getDocs(q);

          if (
            !querySnapshot.empty &&
            querySnapshot.docs[0].data().role === "helper"
          ) {
            setAllow(false);
            toast.error("Helper Can Not Apply to Helper", {
              duration: 4000,
              className: "",
              iconTheme: {
                primary: "#ff0000",
                secondary: "#FFFAEE",
              },
            });
          }
        } catch (error) {
          setError(true);
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

    if (
      todayMonth < dobMonth ||
      (todayMonth === dobMonth && todayDay < dobDay)
    ) {
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
    const ordinalSuffix =
      suffixes[day % 10] || suffixes[day % 100 > 10 && day % 100 < 20 ? 1 : 0];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthString = months[month];

    return `${day}${ordinalSuffix} ${monthString} ${year}`;
  }

  const age = calculateAge(user.personalInfoHelper?.dob);
  const formattedDate = formatDateWithOrdinalAndShorthandMonth(
    user.professionalInfoHelper?.jobStartDate
  );

  const handleClick = () => {
    if (allow) {
      const UpdateApplication = async () => {
        const docRef = doc(
          firestore,
          `documents/${auth.currentUser.uid}_employer`
        );
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const applications = data.applications?.Id || [];

            if (!applications.includes(userId.split("_")[0])) {
              await updateDoc(docRef, {
                "applications.Id": arrayUnion(userId.split("_")[0]),
              });
              setApplication();
              toast.success("Application Submitted", {
                duration: 4000,
                className: "bg-green-200",
                iconTheme: {
                  primary: "#10B981",
                  secondary: "#ECFDF5",
                },
              });

              if (applications.length + 1 > 1) {
                toast.error("More than 2 applications", {
                  duration: 4000,
                  className: "bg-yellow-200",
                  icon: "⚠️",
                });
              }
            } else {
              toast.success("Application already exists", {
                duration: 4000,
                style: { background: "#EFF6FF", color: "#3B82F6" },
                icon: "ℹ️",
              });
            }
          }
        } catch (error) {
          console.error("Error updating document:", error);
        }
      };
      UpdateApplication();
    } else {
      toast.error("Contacting Helper is not available at the moment", {
        duration: 4000,
        className: "",
        iconTheme: {
          primary: "#ff0000",
          secondary: "#FFFAEE",
        },
      });
    }
  };
  console.log(user);
  return (
    <>
      <Toaster />
      {loading ? (
        <SkeletonHelper />
      ) : error ? (
        <div className="text-center py-4">
          <p className="text-red-600 font-bold text-2xl">
            Error fetching user data. Please try again later.
          </p>
        </div>
      ) : (
        <div className="border-2 shadow-md w-full">
          <div className="flex flex-col sm:flex-row gap-5 p-2 pl-4">
            <div className="flex justify-center sm:justify-start">
              <div
                className="w-32 h-32 rounded-full bg-cover bg-center border-2 border-theme"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex flex-col sm:flex-row gap-2 text-center">
                <h2 className="text-theme font-semibold line-clamp-1 tracking-wide text-xl sm:text-2xl lg:text-3xl">
                  {user.personalInfoHelper?.firstName}{" "}
                  {user.personalInfoHelper?.lastName}
                </h2>
                <h3 className="text-theme font-medium line-clamp-1 tracking-wide text-lg sm:text-xl lg:text-2xl mt-auto">
                  ({age} Years)
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row justify-between my-auto mt-4 sm:mt-0">
                <div className="text-center">
                  <p className="text-blue-900 font-extrabold text-lg sm:text-xl lg:text-2xl">
                    {user.personalInfoHelper.gender.charAt(0).toUpperCase() +
                      user.personalInfoHelper.gender.slice(1)}{" "}
                    |{" "}
                    {user.personalInfoHelper.educationLvl
                      .charAt(0)
                      .toUpperCase() +
                      user.personalInfoHelper.educationLvl.slice(1)}{" "}
                    |{" "}
                    {user.personalInfoHelper.nationality
                      .charAt(0)
                      .toUpperCase() +
                      user.personalInfoHelper.nationality.slice(1)}{" "}
                    |{" "}
                    {user.personalInfoHelper.religion.charAt(0).toUpperCase() +
                      user.personalInfoHelper.religion.slice(1)}
                  </p>
                  <div className="mt-1">
                    <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium">
                      Experience:{" "}
                      <span className="font-bold">
                        {user.professionalInfoHelper?.experience}
                      </span>{" "}
                      Years
                    </p>
                    <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium">
                      Salary Expectation:{" "}
                      <span className="font-bold">
                        {user.professionalInfoHelper?.salary}
                      </span>{" "}
                      USD
                    </p>
                    <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium">
                      Job Start Date:{" "}
                      <span className="font-bold">{formattedDate}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleClick}
                  className={`w-full sm:w-auto mt-auto text-white bg-gradient-to-br from-theme to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2 text-center mr-2 mb-2 ${
                    !allow ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!allow}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between gap-2 p-2 text-center">
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={helper}
                alt="Helper"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">Helper</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={location}
                alt="Location"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">{user.location}</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={date}
                alt="Date"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">{formattedDate}</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={experience}
                alt="Experience"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.experience} Years
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={experienceHelper}
                alt="ExperienceHelper"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.experience}
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={education}
                alt="Education"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.personalInfoHelper?.educationLvl}
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={salary}
                alt="Salary"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.salary} USD
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={accomodation}
                alt="Accomodation"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">Accomodation</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={daysOff}
                alt="Days Off"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">Days Off</p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={language}
                alt="Language"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.personalInfoHelper?.language}
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={skills}
                alt="Skills"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.skills}
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={otherSkills}
                alt="OtherSkills"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.otherSkills}
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 rounded-md shadow-md w-24 sm:w-32">
              <img
                src={cookingSkills}
                alt="Cooking Skills"
                className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
              />
              <p className="text-black font-medium">
                {user.professionalInfoHelper?.cookingSkills}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelperCardSingleDetail;
