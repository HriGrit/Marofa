import React from "react";
import Navbar from "../../Navbar/navbar";
import logo from "../../../assets/marofa-whitebg.svg";
import "../../../css/SelectStyle.css";
const AboutEmployer = ({ prevStep, nextStep, values, handleChange }) => {
  const handleNextStep = () => {
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const onChange = (field_name) => (event) => {
    handleChange("aboutEmployer", field_name)(event.target.value);
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <div className="w-3/4 mdnav:w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
        <div className="flex items-center justify-center space-x-2 pb-0">
          <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
          <span className="self-center text-xl font-semibold text-theme sm:text-3xl">
            Marofa
          </span>
        </div>
        <hr className="h-1 bg-theme" />

        <div className="mb-4 mt-4">
          <label className="text-xl font-semibold text-[#14415a]">
            About You
          </label>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Employer Type
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.EmployerType}
                onChange={handleChange("aboutEmployer", "EmployerType")}
              >
                <option value="select-Empolyer-Type">
                  Select Employer Type
                </option>
                <option value="Family">Family</option>
                <option value="Single">Single</option>
                <option value="Couple">Couple</option>
                <option value="Company">Company</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Family Size
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.FamilySize}
                onChange={handleChange("aboutEmployer", "FamilySize")}
              >
                <option value="select-family-size">Select Family Size</option>
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults 1 Child">2 Adults 1 Child</option>
                <option value="2 Adults 2 Children">2 Adults 2 Children</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Nationality
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.Nationality}
                onChange={handleChange("aboutEmployer", "Nationality")}
              >
                <option value="select-nationality">
                  Select Your Nationality
                </option>
                <option value="Saudi">Saudi</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Filipino">Filipino</option>
                <option value="Indian">Indian</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Gender
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.AlertViaEmail}
                onChange={handleChange("aboutEmployer", "AlertViaEmail")}
              >
                <option value="select-gender">Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Day Off
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.Holidays}
                onChange={handleChange("aboutEmployer", "Holidays")}
              >
                <option value="Select-holidays">Select day off offerred</option>
                <option value="Flexible">Flexible</option>
                <option value="To be discussed">To be discussed</option>
                <option value="Negotiable">Negotiable</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Saturday-Sunday">Saturday-Sunday</option>
                <option value="Friday-Saturday">Friday-Saturday</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Accommodation
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.Accomodation}
                onChange={handleChange("aboutEmployer", "Accomodation")}
              >
                <option value="select-accomodation">
                  Select Accomodation Type
                </option>
                <option value="To be discussed">To be discussed</option>
                <option value="Live In">Live In</option>
                <option value="Live Out">Live Out</option>
                <option value="Flexible">Flexible</option>
                <option value="Live In - Share with kid">
                  Live In - Share with kid
                </option>
                <option value="Live In - Share with coworker">
                  Live In - Share with coworker
                </option>
                <option value="Live In - Separate room">
                  Live In - Separate room
                </option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-m font-normal text-[#14415a]">
                Monthly Salary
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                value={values?.Salary}
                onChange={handleChange("aboutEmployer", "Salary")}
              >
                <option value="select-monthly-salary">
                  Select Montly Salary
                </option>
                <option value="Negotiable">Negotiable</option>
                <option value="100-1000">100-1000</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-3000">2000-3000</option>
                <option value="3000-4000">3000-4000</option>
                <option value="4000-5000">4000-5000</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
        </div>

        <div className="flex flex-row justify-between mt-6">
          <button
            type="button"
            onClick={handlePrevStep}
            className="bg-theme text-white rounded-full px-4 py-2"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-theme text-white rounded-full px-4 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutEmployer;
