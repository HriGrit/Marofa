import React, { useState, useEffect } from 'react';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../Navbar/navbar';
import MultiSelectComponent from './MultiSelectComponent';

const CandidatePreferenceE = ({ prevStep, nextStep, value, handleChange }) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };

    const LocationOptions = [
        { label: 'Saudi Arabia', value: 'Saudi Arabia', color: "#14415A" },
        { label: 'UAE', value: 'UAE', color: "#14415A" },
        { label: 'Qatar', value: 'Qatar', color: "#14415A" },
        { label: 'Kuwait', value: 'Kuwait', color: "#14415A" },
        { label: 'Bahrain', value: 'Bahrain', color: "#14415A" },
        { label: 'Oman', value: 'Oman', color: "#14415A" },
        { label: 'Jordan', value: 'Jordan', color: "#14415A" },
        { label: 'Lebanon', value: 'Lebanon', color: "#14415A" },
        { label: 'Egypt', value: 'Egypt', color: "#14415A" },
    ]

    const ContractOptions = [
        { label: 'Permanent', value: 'Permanent', color: "#14415A" },
        { label: 'Contract', value: 'Contract', color: "#14415A" },
        { label: 'Internship', value: 'Internship', color: "#14415A" },
    ]

    const NationalityOptions = [
        { label: 'Saudi', value: 'Saudi', color: "#14415A" },
        { label: 'Egyptian', value: 'Egyptian', color: "#14415A" },
        { label: 'Jordanian', value: 'Jordanian', color: "#14415A" },
        { label: 'Lebanese', value: 'Lebanese', color: "#14415A" },
        { label: 'Kuwaiti', value: 'Kuwaiti', color: "#14415A" },
        { label: 'Omani', value: 'Omani', color: "#14415A" },
        { label: 'Bahraini', value: 'Bahraini', color: "#14415A" },
        { label: 'Qatari', value: 'Qatari', color: "#14415A" },
        { label: 'Emirati', value: 'Emirati', color: "#14415A" },
    ]

    const ReligionOptions = [
        { label: 'Muslim', value: 'Muslim', color: "#14415A" },
        { label: 'Christian', value: 'Christian', color: "#14415A" },
        { label: 'Jewish', value: 'Jewish', color: "#14415A" },
        { label: 'Sikh', value: 'Sikh', color: "#14415A" },
        { label: 'Hindu', value: 'Hindu', color: "#14415A" },
    ]

    const EducationOptions = [
        { label: 'High School', value: 'High School', color: "#14415A" },
        { label: 'Diploma', value: 'Diploma', color: "#14415A" },
        { label: 'Bachelor', value: 'Bachelor', color: "#14415A" },
        { label: 'Master', value: 'Master', color: "#14415A" },
        { label: 'PhD', value: 'PhD', color: "#14415A" },
    ]

    const ExperienceOptions = [
        { label: '0-1', value: '0-1', color: "#14415A" },
        {
            label: '1-3', value: '1-3', color: "#14415A"
        },
        { label: '3-5', value: '3-5', color: "#14415A" },
        {
            label: '5+', value: '5+'
            , color: "#14415A"
        },
    ]

    const GenderOptions = [
        { label: 'Male', value: 'Male', color: "#14415A" },
        { label: 'Female', value: 'Female', color: "#14415A" },
    ]

    const AgeOptions = [
        { label: '18-25', value: '18-25', color: "#14415A" },
        { label: '26-35', value: '26-35', color: "#14415A" },
        { label: '36-45', value: '36-45', color: "#14415A" },
        { label: '46-55', value: '46-55', color: "#14415A" },
        { label: '56-65', value: '56-65', color: "#14415A" },
        { label: '65+', value: '65+', color: "#14415A" },
    ]

    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedContract, setSelectedContract] = useState([]);
    const [selectedNationality, setSelectedNationality] = useState([]);
    const [selectedReligion, setSelectedReligion] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedAge, setSelectedAge] = useState([]);
    const [selectedEducation, setSelectedEducation] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState([]);

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
                        Candidate Preference
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Location'}
                                options={LocationOptions}
                                selectedOptions={selectedLocation}
                                setSelectedOptions={setSelectedLocation} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Religion'}
                                options={ReligionOptions}
                                selectedOptions={selectedReligion}
                                setSelectedOptions={setSelectedReligion} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Nationality'}
                                options={NationalityOptions}
                                selectedOptions={selectedNationality}
                                setSelectedOptions={setSelectedNationality} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Contract Status'}
                                options={ContractOptions}
                                selectedOptions={selectedContract}
                                setSelectedOptions={setSelectedContract} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Gender"}
                                options={GenderOptions}
                                selectedOptions={selectedGender}
                                setSelectedOptions={setSelectedGender} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Age"}
                                options={AgeOptions}
                                selectedOptions={selectedAge}
                                setSelectedOptions={setSelectedAge} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Education"}
                                options={EducationOptions}
                                selectedOptions={selectedEducation}
                                setSelectedOptions={setSelectedEducation} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Experience"}
                                options={ExperienceOptions}
                                selectedOptions={selectedExperience}
                                setSelectedOptions={setSelectedExperience} />
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

export default CandidatePreferenceE;
