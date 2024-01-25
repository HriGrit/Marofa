import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import Navbar from '../Navbar/navbar';
import 'react-phone-number-input/style.css';
import './style.css';
import PhoneInput from 'react-phone-number-input';


const ContactDetailsH = ({ values, handleChange, nextStep, prevStep, setFormData, formData }) => {
    const [errors, setErrors] = useState({});

    const validatePhoneNumber = (phone) => {
        if (!phone) {
            return 'Required';
        } else if (phone.replace(/\ /g, "").length < 11) {
            return 'Invalid phone number, must be 10 digits';
        }
    };

    const handleMobileNoChange = (phone) => {
        const error = validatePhoneNumber(phone);
        if (error) {
            setErrors({ ...errors, mobileNo: error });
        } else {
            setErrors({ ...errors, mobileNo: null });
        }
        setFormData({
            ...formData, contactDetailsHelper: {
                ...formData.contactDetailsHelper,
                mobileNo: phone
            }
        });
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
                    <p>Contact Details</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-4">
                    <div>
                        <label for="phone"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Email-Id
                        </label>
                        <input type="email"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="sophie@example.com"
                            pattern=".+@example\.com"
                            required
                            value={values.email}
                            onChange={handleChange('contactDetailsHelper', 'email')}
                        />
                    </div>
                    <div>
                        <label for="phone"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Phone number
                        </label>
                        <PhoneInput
                            id="phone-number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 phone"
                            placeholder="123-456-7890"
                            required
                            limitMaxLength="10"
                            value={values.mobileNo}
                            onChange={handleMobileNoChange}
                            defaultCountry="SA"
                        />
                    </div>
                    <div>
                        <label for="phone"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            Alternate phone number <span className='font-thin'>(optional)</span>
                        </label>
                        <input type="tel"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="123-456-7890"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={values.altMobileNo}
                            onChange={handleChange('contactDetailsHelper', 'altMobileNo')}
                        />
                    </div>

                    <div>
                        <label for="phone"
                            class="block mb-2 text-m font-normal text-[#14415a]">
                            WhatsApp phone number <span className='font-thin'>(optional)</span>
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

export default ContactDetailsH;