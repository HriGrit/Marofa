import React, { useEffect, lazy, useState } from 'react';
const DatePicker = lazy(() => import('react-datepicker'));
import MultiSelectComponent from '../MultiSelectComponent11';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import "react-datepicker/dist/react-datepicker.css";
import "../../../css/style.css"

const WorkExperienceH = ({ prevStep, nextStep, values, handleChange, handleChanges }) => {
    const [countriesList, setCountriesList] = useState([]);
    const [startDate, setStartDate] = useState(null);
    
    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        handleChange('workExperienceHelper', 'StartDate')({
            target: { value: formattedDate }
        });
    };

    useEffect(() => {
        fetch('https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json')
            .then((response) => response.json())
            .then((data) => {
                setCountriesList(data);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            <div className="w-3/4 mdnav:w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>
                <hr className='h-1 bg-theme' />

                <div className="mb-4 mt-4">
                    <label className='text-xl font-semibold text-[#14415a]'>
                        Your Experience
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                        <div>
                            <label for="firstName"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Years of experience
                            </label>

                            <select
                                id="years of experience"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                                value={values.yearsOfExperience}
                                onChange={handleChange('workExperienceHelper', 'Experience')}
                                required
                            >
                                <option className="text-gray-900" value="" disabled>Select years of experience</option>
                                {Array.from({ length: 51 }, (_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="jobstartdate"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Employment start date
                            </label>
                            <div className="bg-white text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block">
                                <DatePicker
                                    selected={startDate}
                                    showIcon={false}
                                    value={values.StartDate}
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
                            <MultiSelectComponent
                                placeholdertext={'Main Skills'}
                                handleChange={handleChanges}
                                toggle={5} />
                        </div>
                        <div>
                            <label htmlFor="nationality"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Work Country
                            </label>

                            <select
                                id="nationality"
                                value={values.nationality}
                                onChange={handleChange('workExperienceHelper', 'Country')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="" disabled>Select your Nationality</option>
                                {countriesList.map((country) => (
                                    <option key={country.id} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>

                {/* // footer for prev and next button */}
                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={handlePrevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={handleNextStep} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceH;
