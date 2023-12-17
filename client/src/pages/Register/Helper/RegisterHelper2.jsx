import React from 'react'

const RegisterHelper2 = () => {
    <div className='h-screen flex flex-col justify-center'>
        <div className='mx-auto border-2 border-theme shadow-xl rounded-xl p-4 w-1/2 space-y-4'>
            <div className='flex text-2xl items-center justify-center'>
                <img src={logo} alt="logo" className='w-20' />
                <p className=''>MAROFA</p>
            </div>
            <hr className='h-1 bg-theme' />
            <div>
                <img src={uploadpic} alt="uploadpic" className='mx-auto' />
            </div>
            <div className='flex justify-center'>
                <button className='bg-theme text-white rounded-lg px-4 py-2 w-1/3'>Upload Photo</button>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex justify-center'>
                    <button className='bg-theme text-white rounded-lg px-4 py-2'>Prev</button>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-theme text-white rounded-lg px-4 py-2 '>Next</button>
                </div>
            </div>
            <div className="flex justify-center space-x-2">
                {[...Array(9).keys()].map(step => (
                    <div key={step} className={`h-2 w-2 rounded-full ${currentStep === step + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                ))}
            </div>
        </div>
    </div>
}

export default RegisterHelper2