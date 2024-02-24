import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import uploadpic from "../../assets/Uploadpic.png";
import Navbar from '../Navbar/navbar';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../utils/firebase';

const UploadImage = ({ setFormData, formData, nextStep, prevStep }) => {
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState(null);

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
        setImageFile(file);
        setFormData({ ...formData, image: file });
        setImageURL(URL.createObjectURL(file));
    };

    const handleUploadClick = () => {
        document.getElementById('file-upload').click();
    };

    const handleCancel = () => {
        setImageFile(null);
        setImageURL(null);
        setFormData({ ...formData, image: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageFile) {
            const storageRef = ref(storage, `images/${formData.role}`);
            try {
                await uploadBytes(storageRef, imageFile);

                const imageUrl = await getDownloadURL(storageRef);

                setFormData({ ...formData, image: imageUrl });
                toast.success('Image uploaded successfully');
            } catch (error) {
                console.error('Error uploading image: ', error);
            }
        } else {
            toast.error('Please upload an image');
        }
    }

    const handleNext = async () => {
        // if (imageURL) {
        //     nextStep();
        // } else {
        //     toast.error('Please upload an image');
        // }
        nextStep();
    };

    return (
        <>
            <Navbar />
            <Toaster />
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border-4 mt-2">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>
                <hr className='h-1 bg-theme' />
                <div className='cursor-pointer' onClick={handleUploadClick}>
                    {imageURL ? (
                        <img src={imageURL} alt="Uploaded" className='w-[250px] h-[250px] mx-auto my-6 object-cover rounded-lg' />
                    ) : (
                        <img src={uploadpic} alt="upload picture" className='mx-auto my-6' />
                    )}
                </div>
                <div className='flex justify-center'>
                    <label className='bg-theme text-white rounded-lg px-4 py-2 w-1/3 text-center cursor-pointer'>
                        <button onClick={handleSubmit}>Upload Photo</button>
                        <input id='file-upload' type='file' onChange={handleFileChange} className='hidden' />
                    </label>
                    {imageURL && (
                        <button onClick={handleCancel} className='ml-4 bg-theme text-white rounded-lg px-4 py-2'>
                            Cancel
                        </button>
                    )}
                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={prevStep} className='bg-theme text-white rounded-full px-4 py-2'>Back</button>
                    <button onClick={handleNext} className='bg-theme text-white rounded-full px-4 py-2'>Next</button>
                </div>

            </div>
        </>
    );
};

export default UploadImage;
