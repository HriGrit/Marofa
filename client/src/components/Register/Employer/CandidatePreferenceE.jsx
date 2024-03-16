import React, { useState, useEffect } from 'react';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import MultiSelectComponent from '../MultiSelectComponent2';
import '../../../css/style.css';

const CandidatePreferenceE = ({ prevStep, nextStep, value, handleChange }) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handlePrevStep = () => {
        prevStep();
    };
    onst[selected, setSelected] = useState([]);
    const ArrowRenderer = ({ expanded }) => <>{expanded ? "🦉" : "🦚"}</>;
    const CustomClearIcon = () => <div>🤘</div>;
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
                                ArrowRenderer={ArrowRenderer}
                                ClearIcon={<CustomClearIcon />}
                                ClearSelectedIcon={<CustomClearIcon />}
                                handleChange={handleChange}
                                toggle={0} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Religion'}
                                handleChange={handleChange}
                                toggle={1} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Nationality'}
                                handleChange={handleChange}
                                toggle={2} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={'Contract'}
                                handleChange={handleChange}
                                toggle={3} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Gender"}
                                handleChange={handleChange}
                                toggle={4} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Age"}
                                handleChange={handleChange}
                                toggle={5} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Education"}
                                handleChange={handleChange}
                                toggle={6} />
                        </div>
                        <div>
                            <MultiSelectComponent
                                placeholdertext={"Experience"}
                                handleChange={handleChange}
                                toggle={7} />
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
