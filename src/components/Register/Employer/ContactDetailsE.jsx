import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import Navbar from '../../Navbar/navbar';
import 'react-phone-number-input/style.css';
// import '../../../css/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactDetailsE = ({ values, handleChange, nextStep, prevStep, setFormData, formData }) => {
    const [errors, setErrors] = useState({});
    const [validatemobileNo, setValidateMobileNo] = useState(false);
    const [validateAltMobileNo, setValidateAltMobileNo] = useState(false);
    const [validateWaMobileNo, setValidateWaMobileNo] = useState(false);

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
            // toast.error('Invalid Main Phone number');
            setErrors({ ...errors, mobileNo: error });
        } else {
            // toast.success('Valid Main Phone number');
            // setValidateMobileNo(true);
            setErrors({ ...errors, mobileNo: '' });
        }
        setFormData({
            ...formData, contactDetailsEmployer: {
                ...formData.contactDetailsEmployer,
                mobileNo: phone
            }
        });
    };

    const handleAltMobileNoChange = (phone) => {
        const error = validatePhoneNumber(phone);
        if (error) {
            // toast.error('Invalid Alt phone number');
            setErrors({ ...errors, altMobileNo: error });
        } else {
            // toast.success('Valid Alt Phone number');
            // setValidateAltMobileNo(true);
            setErrors({ ...errors, altMobileNo: '' });
        }
        setFormData({
            ...formData, contactDetailsEmployer: {
                ...formData.contactDetailsEmployer,
                altMobileNo: phone
            }
        });
    };

    const handleWaMobileNoChange = (phone) => {
        const error = validatePhoneNumber(phone);
        if (error) {
            // toast.error('Invalid Whatsapp phone number');
            setErrors({ ...errors, waMobileNo: error });
        } else {
            // toast.success('Valid Whatsapp Phone number');
            // setValidateWaMobileNo(true);
            setErrors({ ...errors, waMobileNo: '' });
        }
        setFormData({
            ...formData, contactDetailsEmployer: {
                ...formData.contactDetailsEmployer,
                waMobileNo: phone
            }
        });
    }

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            <Toaster />

            <div className="w-3/4 mdnav:w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
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
                        <label for="email"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Email-Id
                        </label>
                        <input type="email"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="sophie@example.com"
                            pattern=".+@example\.com"
                            required
                            value={values.email}
                            onChange={handleChange('contactDetailsEmployer', 'email')}
                        />
                    </div>
                    <div>
                        <label for="phone"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Phone number
                        </label>
                        <div className='custom-phone-input'>
                            <PhoneInput
                                id="phone-number"
                                className='input-custom'
                                placeholder="123-456-7890"
                                required
                                limitMaxLength="9"
                                value={values.mobileNo}
                                onChange={handleMobileNoChange}
                                defaultCountry="SA"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="phone"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            Alternate phone number <span className='font-thin'>(optional)</span>
                        </label>
                        <div className='custom-phone-input'>
                            <PhoneInput
                                id="alt-phone-number"
                                className="input-custom"
                                placeholder="123-456-7890"
                                required
                                limitMaxLength="9"
                                value={values.altMobileNo}
                                onChange={handleAltMobileNoChange}
                                defaultCountry="SA"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="phone"
                            className="block mb-2 text-m font-normal text-[#14415a]">
                            WhatsApp phone number <span className='font-thin'>(optional)</span>
                        </label>
                        <div className='custom-phone-input'>
                            <PhoneInput
                                id="alt-phone-number"
                                className="input-custom"
                                placeholder="123-456-7890"
                                required
                                limitMaxLength="9"
                                value={values.waMobileNo}
                                onChange={handleWaMobileNoChange}
                                defaultCountry="SA"
                            />
                        </div>
                    </div>
                </form>
                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={prevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={nextStep} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsE;