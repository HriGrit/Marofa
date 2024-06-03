import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactDetailsH = ({ values, handleChange, nextStep, prevStep, setFormData, formData }) => {
    const [errors, setErrors] = useState({});

    const validatePhoneNumber = (phone, isPrimary = true) => {
        if (isPrimary && !phone) {
            return 'Required';
        } else if (phone && phone.replace(/\D/g, "").length < 10) {
            return 'Invalid phone number, must be at least 10 digits';
        }
        return '';
    };

    const handlePrimaryPhoneChange = (phone) => {
        const error = validatePhoneNumber(phone, true);
        setErrors({
            mobileNo: error,
            altMobileNo: '',
            waMobileNo: ''
        });
        setFormData({
            ...formData, contactDetailsHelper: {
                ...formData.contactDetailsHelper,
                mobileNo: phone
            }
        });
    };

    const handleAltPhoneChange = (phone) => {
        const error = validatePhoneNumber(phone, false);
        setErrors({
            mobileNo: '',
            altMobileNo: error,
            waMobileNo: ''
        });
        setFormData({
            ...formData, contactDetailsHelper: {
                ...formData.contactDetailsHelper,
                altMobileNo: phone
            }
        });
    };

    const handleWaPhoneChange = (phone) => {
        const error = validatePhoneNumber(phone, false);
        setErrors({
            mobileNo: '',
            altMobileNo: '',
            waMobileNo: error
        });
        setFormData({
            ...formData, contactDetailsHelper: {
                ...formData.contactDetailsHelper,
                waMobileNo: phone
            }
        });
    };

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            {/* <Toaster /> */}

            <div className="w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold sm:text-3xl">MAROFA</span>
                </div>
                <hr className='h-1 bg-theme' />

                <div className='pt-5 text-xl font-semibold'>
                    <p>Contact Details</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="emailId" className="block mb-2 text-m font-normal">
                            Email-Id
                        </label>
                        <input type="email"
                            id="emailId"
                            className="bg-gray-50 border-[2px] border-[#ccc] text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="sophie@example.com"
                            required
                            value={values.email}
                            onChange={handleChange('contactDetailsHelper', 'email')}
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="phone-input">
                        <label htmlFor="phoneNumber" className="block mb-2 text-m font-normal">
                            Phone number
                        </label>

                        <div className="custom-phone-input">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={values.mobileNo}
                                onChange={handlePrimaryPhoneChange}
                                className="input-custom"
                            />
                        </div>

                        {errors.mobileNo && <p className="text-red-500 text-xs">{errors.mobileNo}</p>}
                    </div>

                    {/* Alternate Phone Number Input */}
                    <div className="phone-input">
                        <label htmlFor="phoneNumber" className="block mb-2 text-m font-normal">
                            Alternate phone number (optional)
                        </label>

                        <div className="custom-phone-input">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={values.altMobileNo}
                                onChange={handleAltPhoneChange}
                                className="input-custom"
                            />
                        </div>

                        {errors.altMobileNo && <p className="text-red-500 text-xs">{errors.altMobileNo}</p>}
                    </div>

                    {/* Whatsapp Phone Number Input */}
                    <div className="phone-input">
                        <label htmlFor="phoneNumber" className="block mb-2 text-m font-normal">
                            Whatsapp phone number (optional)
                        </label>

                        <div className="custom-phone-input">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={values.waMobileNo}
                                onChange={handleWaPhoneChange}
                                className="input-custom"
                            />
                        </div>

                        {errors.waMobileNo && <p className="text-red-500 text-xs">{errors.waMobileNo}</p>}
                    </div>
                </form >
                <div className='flex flex-row justify-between mt-6'>
                    <button type="button" onClick={prevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button type="button" onClick={nextStep} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>
            </div >
        </div>
    );
};

export default ContactDetailsH;
