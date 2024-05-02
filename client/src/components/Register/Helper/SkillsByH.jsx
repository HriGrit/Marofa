import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import { MultiSelect } from 'react-multi-select-component';

    const SkillsByH = ({ prevStep, nextStep, values, handleChange }) => {
        const handleNextStep = () => {
            nextStep();
        };
    
        const handlePrevStep = () => {
            prevStep();
        };
    return (
        <>
            <Navbar />
            <Toaster />

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border-4 mt-2">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold">MAROFA</span>
                </div>

                <hr className='h-1 bg-theme' />

                <div className='pt-5 text-xl font-semibold'>
                    <p>Select your Skills</p>
                </div>

                <form className="my-4 mx-4">
                    <div>
                        <label htmlFor="languages" className="block mb-2 text-m font-normal">
                            Languages
                        </label>
                        <MultiSelect
                            options={skillsOptions}
                            value={selectedSkills} // Ensure this is mapped correctly from props
                            onChange={handleChange} // Use the handler function
                            labelledBy="Select Skills"
                        />
                    </div>
                </form>

                <div className='flex justify-between mt-6'>
                    <button onClick={prevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={nextStep} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>
            </div>
        </>
    );
};

export default SkillsByH;
