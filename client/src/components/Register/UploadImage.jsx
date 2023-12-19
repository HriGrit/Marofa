import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import uploadpic from '../../assets/uploadpic.svg';
import Navbar from '../Navbar/navbar';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage'; // Import Firebase Storage methods
import { storage } from '../../utils/firebase'; // Import your Firebase storage instance

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

    const handleNext = async () => {
        if (imageFile) {
            const storageRef = ref(storage, `images/${formData.role}/${formData.personalInfo.name}`);
            try {
                // Upload the image to Firebase Storage
                await uploadBytes(storageRef, imageFile);

                // Get the download URL of the uploaded image
                const imageUrl = await getDownloadURL(storageRef);

                // Update the formData with the image URL
                setFormData({ ...formData, image: imageUrl });

                // Continue to the next step
                nextStep();
            } catch (error) {
                console.error('Error uploading image: ', error);
            }
        } else {
            toast.error('Please upload an image');
        }
    };

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
                            Upload Photo
                            <input id='file-upload' type='file' onChange={handleFileChange} className='hidden' />
                        </label>
                        {imageURL && (
                            <button onClick={handleCancel} className='ml-4 bg-theme text-white rounded-lg px-4 py-2'>
                                Cancel
                            </button>
                        )}
                    </div>
                    <div className='flex flex-row justify-between'>
                        <button onClick={prevStep} className='bg-theme text-white rounded-lg px-4 py-2'>Prev</button>
                        <button onClick={handleNext} className='bg-theme text-white rounded-lg px-4 py-2'>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadImage;
