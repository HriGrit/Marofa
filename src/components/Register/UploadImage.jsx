import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../../assets/marofa-whitebg.svg';
import uploadpic from "../../assets/Uploadpic.png";
import Navbar from '../Navbar/navbar';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage, auth } from '../../utils/firebase';

const UploadImage = ({ setFormData, formData, nextStep, prevStep }) => {
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const user = auth.currentUser;
    const uid = user.uid;

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
        if (!imageFile) {
            toast.error('Please upload an image');
            return;
        }

        const storageRef = ref(storage, `images/${formData.role}/${uid}`);

        toast.promise(
            uploadBytes(storageRef, imageFile).then(() => {
                return getDownloadURL(storageRef);
            }),
            {
                loading: 'Uploading image...',
                success: (imageUrl) => {
                    setFormData({ ...formData, image: imageUrl });
                    return 'Image uploaded successfully';
                },
                error: (error) => {
                    console.log(error);
                    return 'Error uploading image';
                },
            }
        );
    };


    const handleNext = async () => {
        if (imageURL) {
            nextStep();
        } else {
            toast.error('Please upload an image');
        }
    };

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <Navbar />
            <Toaster />
            <div className="w-3/4 mdnav:w-1/2 mx-auto bg-white p-8 rounded-2xl border-4 my-auto">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme mdnav:text-3xl">MAROFA</span>
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
                    <label className='bg-theme text-white rounded-lg px-4 py-2 w-3/4 mdnav:w-1/3 text-center cursor-pointer'>
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
        </div>
    );
};

export default UploadImage;
