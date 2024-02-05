import React, { useState, useEffect } from 'react';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../Navbar/navbar';
import './style.css';
import DateComponent from './DateComponent';

const JobOffered = ({ prevStep, nextStep, value, handleChange }) => {
    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [startDate, setStartDate] = useState(null);

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

    useEffect(() => {
        const countryid = value?.jobOfferedEmployer?.jobLocationCountry;
        console.log(countryid);
        if (countryid) {
            fetch('https://venkatmcajj.github.io/react-country-state-city/data/statesminified.json')
                .then((response) => response.json())
                .then((data) => {
                    const countryObject = data.find((item) => {
                        console.log('item:', item.id, "country", countryid);
                        console.log(typeof (item.id), typeof (countryid));

                        return item.id === parseInt(countryid);
                    });

                    if (countryObject) {
                        console.log('Found country object:', countryObject);
                        setStateList(countryObject);
                    } else {
                        console.log('Country object not found');
                    }

                })
                .catch((error) => {
                    console.error('Error fetching states:', error);
                    setStateList([]);
                });
        } else {
            setStateList([]);
        }
    }, [value?.jobOfferedEmployer?.jobLocationCountry]);

    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };

    const handleCountryChange = (e) => {
        setCountryid(e.target.value);
        setStateid(''); // Reset state selection when country changes
    };

    const handleStateChange = (e) => {
        handleChange("jobOfferedEmployer", "jobLocationCity");
        setStateid(e.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border-4 mt-2">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>
                <hr className='h-1 bg-theme' />

                {/*main component*/}
                <div className="mb-4 mt-4">
                    <label className='text-xl font-semibold text-[#14415a]'>
                        Job Offered
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                        <div>
                            <label htmlFor="country-select"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Job Location Country
                            </label>
                            <select
                                id="country-select"
                                value={value?.jobOfferedEmployer?.jobLocationCountry}
                                onChange={handleChange('jobOfferedEmployer', 'jobLocationCountry')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="">Select Country</option>
                                {countriesList.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="state-select"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Job Location State
                            </label>
                            <select
                                id="state-select"
                                onChange={handleChange('jobOfferedEmployer', 'jobLocationCity')}
                                value={value?.jobOfferedEmployer?.jobLocationCity}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="">Select State</option>
                                {stateList.states && stateList.states.map((state) => (
                                    <option key={state.id} value={state.id}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="state-select"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Job Location State
                            </label>
                            <DateComponent startDate={startDate} setStartDate={setStartDate} placeholderText="Start Date" value={value} handleChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="weeks-select" className="block mb-2 text-m font-normal text-[#14415a]">
                                Flexibility in Start Date
                            </label>
                            <select
                                id="weeks-select"
                                onChange={handleChange('jobOfferedEmployer', 'jobFlexibility')}
                                value={value?.jobOfferedEmployer?.jobFlexibility}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="">Select Duration</option>
                                {[...Array(8)].map((_, index) => {
                                    const weekNumber = index + 1;
                                    const weekLabel = weekNumber === 1 ? '1 week' : `${weekNumber} weeks`;
                                    return (
                                        <option key={weekNumber} value={weekNumber}>
                                            {weekLabel}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Job-Type-Select"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Job Type
                            </label>
                            <select
                                id="job-type-select"
                                value={value?.jobOfferedEmployer?.jobType}
                                onChange={handleChange('jobOfferedEmployer', 'jobType')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="">Select Job Type</option>
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="contract">Contract</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Job-Type-Select"
                                className="block mb-2 text-m font-normal text-[#14415a]">
                                Type of Job Offered
                            </label>
                            <select
                                id="position-type-select"
                                value={value?.jobOfferedEmployer?.jobPosition}
                                onChange={handleChange('jobOfferedEmployer', 'jobPosition')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            >
                                <option value="">Select Position</option>
                                <option value="domestic-helper">Domestic Helper</option>
                                <option value="cook">Cook</option>
                                <option value="nanny">Nanny</option>
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
        </>
    );
};

export default JobOffered;
