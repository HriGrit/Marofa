// import React from 'react'
// import logo from '../../../assets/marofa-whitebg.svg'
// import uploadpic from '../../../assets/uploadpic.svg'
// import Navbar from '../../../components/Navbar/navbar';

// const RegisterHelper1 = () => {
//     const currentStep = 1;

//     return (
//         <>
//             <Navbar />
//             <div className='h-screen flex flex-col justify-center pb-[8%] app:pb-[3.5%]'>
//                 <div className='mx-auto border-2 border-theme shadow-xl rounded-xl p-4 w-2/3 app:w-1/2 lg:w-1/3 space-y-4'>
//                     <div className='flex text-2xl items-center justify-center'>
//                         <img src={logo} alt="logo" className='w-20' />
//                         <p className=''>MAROFA</p>
//                     </div>
//                     <hr className='h-1 bg-theme' />
//                     <div>
//                         <img src={uploadpic} alt="uploadpic" className='mx-auto' />
//                     </div>
//                     <div className='flex justify-center'>
//                         <button className='bg-theme text-white rounded-lg px-4 py-2 w-1/3'>Upload Photo</button>
//                     </div>
//                     <div className='flex flex-row justify-between'>
//                         <div className='flex justify-center'>
//                             <button className='bg-theme text-white rounded-lg px-4 py-2'>Prev</button>
//                         </div>
//                         <div className='flex justify-center'>
//                             <button className='bg-theme text-white rounded-lg px-4 py-2 '>Next</button>
//                         </div>
//                     </div>
//                     <div className="flex justify-center space-x-2">
//                         {[...Array(9).keys()].map(step => (
//                             <div key={step} className={`h-2 w-2 rounded-full ${currentStep === step + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RegisterHelper1

import React, { useState } from 'react';
import logo from '../../../assets/marofa-whitebg.svg';
import uploadpic from '../../../assets/uploadpic.svg';
import Navbar from '../../../components/Navbar/navbar';

const RegisterHelper1 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const goToNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const goToPrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStepsIndicator = (currentStep) => {
        return [...Array(9).keys()].map(step => (
            <div key={step} className={`h-2 w-2 rounded-full ${currentStep === step + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ));
    };

    return (
        <>
            <Navbar />
            <div className='h-screen flex flex-col justify-center pb-[8%] app:pb-[3.5%]'>
                <div className='mx-auto border-2 border-theme shadow-xl rounded-xl p-4 w-2/3 app:w-1/2 lg:w-1/3 space-y-4'>
                    <div className='flex text-2xl items-center justify-center'>
                        <img src={logo} alt="logo" className='w-20' />
                        <p className=''>MAROFA</p>
                    </div>
                    <hr className='h-1 bg-theme' />
                    <div>
                        <img src={uploadpic} alt="upload picture" className='mx-auto' />
                    </div>
                    <div className='flex justify-center'>
                        <label htmlFor='file-upload' className='bg-theme text-white rounded-lg px-4 py-2 w-1/3 text-center cursor-pointer'>
                            Upload Photo
                            <input id='file-upload' type='file' onChange={handleFileChange} className='hidden' />
                        </label>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <button onClick={goToPrevStep} className='bg-theme text-white rounded-lg px-4 py-2'>Prev</button>
                        <button onClick={goToNextStep} className='bg-theme text-white rounded-lg px-4 py-2'>Next</button>
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
