import React from 'react';

const RegisterHelper2 = () => {
    // Include state and handlers as necessary for form inputs

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='border-2 border-gray-300 shadow-xl rounded-xl p-4 w-1/2 space-y-4'>
                <h2 className="text-lg font-semibold text-theme mb-4">Personal Information</h2>
                <p className="text-gray-600 mb-8">Please fill your information so the employers get in touch with you.</p>

                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your First Name" className="border rounded px-4 py-2" />
                    <input type="text" placeholder="Your Last Name" className="border rounded px-4 py-2" />

                    <input type="text" placeholder="Gender" className="border rounded px-4 py-2" />
                    <input type="text" placeholder="Religion" className="border rounded px-4 py-2" />

                    <input type="text" placeholder="Nationality" className="border rounded px-4 py-2" />
                    <input type="text" placeholder="Ethnicity" className="border rounded px-4 py-2" />

                    <input type="text" placeholder="dd - mm - yyyy" className="border rounded px-4 py-2" />
                    <input type="text" placeholder="Your Education Level" className="border rounded px-4 py-2" />
                </div>
            </div>
        </div>
    );
}

export default RegisterHelper2;
