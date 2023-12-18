import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../../assets/marofa-whitebg.svg';
import uploadpic from '../../../assets/uploadpic.svg';
import Navbar from '../../../components/Navbar/navbar';
import firebaseFileUpload from '../../../utils/firebaseFileUpload';

const RegisterHelper1 = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [imagelink, setImagelink] = useState("");

    const currentStep = 1;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!(file && file.type.startsWith('image/'))) {
            toast.error('Please upload an image');
            return;
        } else {
            if (file.size > 5000000) {
                toast.error('Image size must be less than 5MB');
                return;
            }
        }
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setUploadedImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        if (!uploadedImage) {
            toast.error('Please upload an image');
            return;
        } else {
            firebaseFileUpload(uploadedImage, setImagelink);
        }
    };
    console.log(imagelink);
    const renderStepsIndicator = (currentStep) => {
        return [...Array(9).keys()].map(step => (
            <div key={step} className={`h-2 w-2 rounded-full ${currentStep === step + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ));
    };

    const handleUploadClick = () => {
        document.getElementById('file-upload').click();
    }

    return (
        <>
            <Navbar />
            <Toaster />
            <div className='h-screen flex flex-col justify-center pb-[8%] app:pb-[3.5%]'>
                <div className='mx-auto border-2 border-theme shadow-xl rounded-xl p-4 w-2/3 app:w-1/2 lg:w-1/3 space-y-4'>
                    <div className='flex text-2xl items-center justify-center'>
                        <img src={logo} alt="logo" className='w-20' />
                        <p className=''>MAROFA</p>
                    </div>
                    <hr className='h-1 bg-theme' />
                    <div className='cursor-pointer' onClick={handleUploadClick}>
                        {imageURL ? (
                            <img src={imageURL} alt="Uploaded" className='w-[250px] h-[250px] mx-auto object-cover rounded-lg' />
                        ) : (
                            <img src={uploadpic} alt="upload picture" className='mx-auto' />
                        )}
                    </div>
                    <div className='flex justify-center'>
                        <label htmlFor='file-upload' className='bg-theme text-white rounded-lg px-4 py-2 w-1/3 text-center cursor-pointer'>
                            <button onClick={handleSubmit}>Upload Photo</button>
                            <input id='file-upload' type='file' onChange={handleFileChange} className='hidden' />
                        </label>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <button className='bg-theme text-white rounded-lg px-4 py-2'>Prev</button>
                        <button className='bg-theme text-white rounded-lg px-4 py-2'>Next</button>
                    </div>
                    <div className="flex justify-center space-x-2">
                        {renderStepsIndicator(currentStep)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterHelper1;