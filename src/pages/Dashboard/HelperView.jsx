import React from 'react';
import { Link } from 'react-router-dom';

const HelperView = ({ name, applications }) => {
    return (
        <div className='mx-8 md:flex justify-evenly'>
            <div className="bg-theme text-white p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Welcome, {name} (Helper)</h2>
                <div className="flex justify-center mb-6">
                    {/* Your CircleProgress component */}
                </div>
                <h3 className="text-lg mb-2">Your Applications</h3>
                <ul>
                    {applications.length > 0 ? (
                        applications.map(id => (
                            <li key={id} className="mb-2">
                                <div className="text-blue-400 hover:text-blue-200">
                                    <Link to={`/employer-details/${id}`}>
                                        Employer ID: {id}
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className='text-lg'>You have not applied to any jobs yet.</p>
                    )}
                </ul>
            </div>
            <div className='p-6 text-center md:text-left'>
                <h2 className="text-2xl mb-4">Apply to more Employers</h2>
                <Link to="/employers" className="block mb-4">
                    <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"> 
                        More Employers
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HelperView;
