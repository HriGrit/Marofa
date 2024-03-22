import React, { useState, useEffect } from 'react';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import MultiSelectComponent from '../MultiSelectComponent1';

const RequiredSkillsE = ({ prevStep, nextStep, values, handleChange }) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            <div className="w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>
                <hr className='h-1 bg-theme' />

                <div className="mb-4 mt-4">
                    <label className='text-xl font-semibold text-[#14415a]'>
                        Required Skils
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Languages'}
                                handleChange={handleChange}
                                toggle={0}
                            />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Cooking Skills'}
                                handleChange={handleChange}
                                toggle={1} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Main Skills'}
                                handleChange={handleChange}
                                toggle={2} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Other Skills'}
                                handleChange={handleChange}
                                toggle={3} />
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

export default RequiredSkillsE;
