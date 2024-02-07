import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../Navbar/navbar';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import DatePicker from "react-datepicker";

const ProfessionalInfoH = ({ values, handleChange, nextStep, prevStep }) => {
    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        handleChange('professionalInfoHelper', 'jobStartDate')({
            target: { value: formattedDate }
        });
    };
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
                    <p>Professional Information</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">

                    <div>

                        <label for="firstName"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Years of experience
                        </label>

                        <select
                            id="years of experience"
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.yearsOfExperience}
                            onChange={handleChange('professionalInfoHelper', 'yearsOfExperience')}
                            required
                        >
                            <option className="text-gray-900" value="" disabled>Select years of experience</option>
                            {Array.from({ length: 51 }, (_, index) => (
                                <option key={index} value={index}>{index}</option>
                            ))}
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
                        </select>

                    </div>

                    <div>

                        <label htmlFor="jobstartdate"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Employment start date
                        </label>

                        <div className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <DatePicker
                                selected={startDate}
                                showIcon={false}
                                value={values.jobStartDate}
                                onChange={handleDateChange}
                                placeholderText={' YYYY-MM-DD'}
                                dateFormat='dd/MM/yyyy'
                                showMonthDropdown
                                showYearDropdown
                                disabledKeyboardNavigation
                                dropdownMode="select"
                            />
                        </div>

                    </div>

                    <div>
                        <label htmlFor="currentworkstatus"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Current work status
                        </label>

                        <select
                            id="currentworkstatus"
                            value={values.currentWorkStatus}
                            onChange={handleChange('professionalInfoHelper', 'currentWorkStatus')}
                            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                        >
                            <option value="" disabled>Select your current work status</option>
                            <option value="Finished contract">Finished contract</option>
                            <option value="Terminated">Terminated</option>
                            <option value="Break contract">Break contract</option>
                            <option value="Transfer">Transfer</option>
                            <option value="Working in home country">Working in home country</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Ex overseas">Ex overseas</option>

                        </select>

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

export default ProfessionalInfoH;
