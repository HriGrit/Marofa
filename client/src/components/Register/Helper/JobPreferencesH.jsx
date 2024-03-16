import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import "react-datepicker/dist/react-datepicker.css";
import '../../../css/style.css';
import DatePicker from "react-datepicker";

const JobPreferencesH = ({ values, handleChange, nextStep, prevStep }) => {
    const [startDate, setStartDate] = useState(null);

    return (
        <>
            <Navbar />
            <Toaster />

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border-4 mt-2">

                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16 color-[#14415a]" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>

                <hr className='h-1 bg-theme' />

                <div className='pt-5 text-xl font-semibold text-[#14415a]'>
                    <p>Job preferences</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">

                    <div>

                        <label for="preferredaccomodationtype"
                            class="flex-1 block mb-2 text-m font-normal text-[#14415a] align-bottom justify-center self-center">
                            Preferred accomodation type
                        </label>

                        <select
                            id="preferredaccomodationtype"
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.accomodationPreference}
                            onChange={handleChange('jobPreferenceHelper', 'accomodationPreference')}
                            required
                        >
                            <option value="" disabled>Select your preferred accomodation</option>
                            <option value="Live out">Live out</option>
                            <option value="Flexible">Flexible</option>
                            <option value="To be discussed">To be discussed</option>
                            <option value="Live in - separate room">Live in <span>-</span> separate room</option>
                            <option value="Live in - shared room">Live in <span>-</span> shared room</option>
                            <option value="Live in">Live in</option>
                        </select>

                    </div>

                    <div>
                        <label htmlFor="jobtype"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Employment type
                        </label>

                        <select
                            id="gender"
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.gender}
                            onChange={handleChange('professionalInfoHelper', 'jobType')}
                            required
                        >
                            <option value="" disabled>Select employment type</option>
                            <option value="Full time">Full time</option>
                            <option value="Part time">Part time</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Flexible">Flexible</option>
                        </select>

                    </div>

                    <div>
                        <label htmlFor="currentworkstatus"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Preferred job location
                        </label>

                        <select
                            id="preferredlocation"
                            value={values.preferredJobLocation}
                            onChange={handleChange('jobPreferenceHelper', 'preferredJobLocation')}
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                        >
                            <option value="" disabled>Select preferred job location</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>

                        </select>

                    </div>

                    <div>
                        <label htmlFor="dayOffPreference" className="block mb-2 text-m font-normal text-[#14415a]">
                            Day Off Preference
                        </label>
                        <select
                            id="dayOffPreference"
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.dayOffPreference}
                            onChange={handleChange('jobPreferenceHelper', 'dayOffPreference')}
                            required
                        >
                            <option value="" disabled>Select your preferred day off</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Flexible">Flexible</option>
                            <option value="To be discussed">To be discussed</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="expectedSalary"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Expected salary per month <span className='font-thin'>(SAR)</span>
                        </label>

                        <input
                            id="expectedSalary"
                            type="number"
                            name="salary"
                            placeholder="Enter salary amount"
                            value={values.expectedSalary}
                            onChange={handleChange('jobPreferenceHelper', 'expectedSalary')}
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                        >

                        </input>

                    </div>

                </form>

                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={prevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={nextStep} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>
            </div>
        </>
    );
};

export default JobPreferencesH;
