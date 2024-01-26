import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../Navbar/navbar';
import './style.css';



const PersonalInfoH = ({ values, handleChange, nextStep, prevStep, setFormData, formData }) => {
    const [errors, setErrors] = useState({});
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
                    <p>Personal Information</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                    <div>
                        <label for="firstName"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            First Name
                        </label>
                        <input type="text"
                            id="firstName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                            pattern="[A-Za-z]"
                            required
                            value={values.firstName}
                            onChange={handleChange('personalInfoHelper', 'firstName')}
                        />
                    </div>
                    <div>
                        <label for="lastName"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Last Name
                        </label>
                        <input type="text"
                            id="lastName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Smith"
                            pattern="[A-Za-z]"
                            required
                            value={values.lastName}
                            onChange={handleChange('personalInfoHelper', 'lastName')}
                        />
                    </div>

                    <div>
                        <label htmlFor="gender"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.gender}
                            onChange={handleChange('personalInfoHelper', 'gender')}
                            required
                        >
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="religion"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Religion
                        </label>
                        <select
                            id="religion"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 custom-select"
                            value={values.religion}
                            onChange={handleChange('personalInfoHelper', 'religion')}
                            required
                        >
                            <option value="" disabled>Select a religion</option>
                            <option value="christianity">Christianity</option>
                            <option value="islam">Islam</option>
                            <option value="hinduism">Hinduism</option>
                            <option value="buddhism">Buddhism</option>
                            <option value="sikhism">Sikhism</option>
                            <option value="judaism">Judaism</option>
                            <option value="other">Other</option>
                            <option value="none">None</option>
                        </select>
                    </div>


                    <div>
                        <label for="phone"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            WhatsApp phone numberxsxsxs <span className='font-thin'>(optional)</span>
                        </label>
                        <input type="tel"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="123-456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={values.waMobileNo}
                            onChange={handleChange('contactDetailsHelper', 'waMobileNo')}
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

export default PersonalInfoH;