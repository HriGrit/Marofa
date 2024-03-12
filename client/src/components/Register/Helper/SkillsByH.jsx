import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import { MultiSelect } from 'react-multi-select-component';



const SkillsByH = ({ values, handleChange, nextStep, prevStep }) => {


    const skillsOptions = [
        { label: 'Cooking', value: 'cooking' },
        { label: 'Cleaning', value: 'cleaning' },
        { label: 'Driving', value: 'driving' },
    ];

    const [selectedSkills, setSelectedSkills] = useState([]);
    const handleSkillsChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value); // Transform to array of values
        handleChangeMultiSelect('skillsSelectedByHelper', 'Languages')(selectedValues);
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
                    <p>Select your Skills</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">

                    <div>
                        <label htmlFor="languages" className="block mb-2 text-m font-normal text-[#14415a]">
                            Languages
                        </label>
                        <MultiSelect
                            options={skillsOptions}
                            value={selectedSkills} // Use the state variable here
                            onChange={handleSkillsChange} // Pass the handler function
                            labelledBy="Select Skills"
                        />
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

export default SkillsByH;