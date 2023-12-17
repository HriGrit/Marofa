import React from 'react'
import logo from '../../../assets/marofa-logo-dark.svg'

const RegisterHelper1 = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    return (
        <div className=''>
            <img src={logo} alt="logo" className="h-32 w-32 mx-auto" />

            <div className="flex justify-center space-x-2">
                {[...Array(9).keys()].map(step => (
                    <div key={step} className={`h-2 w-2 rounded-full ${currentStep === step + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                ))}
            </div>
        </div>
    )
}

export default RegisterHelper1