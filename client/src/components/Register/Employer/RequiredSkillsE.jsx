import React, { useState, useEffect } from 'react';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import MultiSelectComponent from '../MultiSelectComponent';

const RequiredSkillsE = ({ prevStep, nextStep, value, handleChange }) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };

    const LanguageOptions = [
        { value: "English", label: "English", color: "#14415A" },
        { value: "French", label: "French", color: "#14415A" },
        { value: "Spanish", label: "Spanish", color: "#14415A" },
    ];

    const CookingSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        { value: "Cook", label: "Cook", color: "#14415A" },
        { value: "Nanny", label: "Nanny", color: "#14415A" },
    ];

    const MainSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        { value: "Cook", label: "Cook", color: "#14415A" },
        { value: "Nanny", label: "Nanny", color: "#14415A" }
    ];

    const OtherSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        {
            value: "Cook", label: "Cook", color: "#14415A"
        },
        { value: "Nanny", label: "Nanny", color: "#14415A" }
    ];

    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedCookingSkills, setSelectedCookingSkills] = useState([]);
    const [selectedMainSkills, setSelectedMainSkills] = useState([]);
    const [selectedOtherSkills, setSelectedOtherSkills] = useState([]);

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
                        Required Skils
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Languages'}
                                options={LanguageOptions}
                                selectedOptions={selectedLanguages}
                                setSelectedOptions={setSelectedLanguages} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Cooking Skills'}
                                options={CookingSkills}
                                selectedOptions={selectedCookingSkills}
                                setSelectedOptions={setSelectedCookingSkills} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Main Skills'}
                                options={MainSkills}
                                selectedOptions={selectedMainSkills}
                                setSelectedOptions={setSelectedMainSkills} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Other Skills'}
                                options={OtherSkills}
                                selectedOptions={selectedOtherSkills}
                                setSelectedOptions={setSelectedOtherSkills} />
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

export default RequiredSkillsE;
