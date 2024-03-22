import React from 'react'
import logo from "../../../assets/marofa-whitebg.svg";
import Navbar from '../../Navbar/navbar';
const JobDescription = ({ prevStep, value, submit, handleChange }) => {

    const handlePrevStep = () => {
        prevStep();
    }

    const handleSubmit = () => {
        submit();
    }

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            <div className="w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
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
                    <div className="my-4 mx-4">
                        <div className='flex flex-col'>
                            <label className='text-lg font-semibold text-[#14415a]'>
                                Job Title
                            </label>
                            <textarea
                                className='h-14 border-2 border-theme rounded-full pt-4 pl-4'
                                name="jobDescription"
                                value={value?.jobTitle}
                                onChange={handleChange("aboutJobEmployer", "jobTitle")}
                                placeholder='Enter Job Title'
                            />
                        </div>
                    </div>
                    <div className="my-4 mx-4">
                        <div>
                            <label className='text-lg font-semibold text-[#14415a]'>
                                Job Description
                            </label>
                            <textarea
                                className='w-full h-32 border-2 border-theme rounded-md p-4 bg-[#D8DADC]'
                                name="jobDescription"
                                value={value?.jobDescription}
                                onChange={handleChange("aboutJobEmployer", "jobDescription")}
                                placeholder='Enter Job Description'
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={handlePrevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={handleSubmit} className='bg-theme text-white rounded-full px-4 py-2'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default JobDescription