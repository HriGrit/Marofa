import React from 'react';
import { Link } from 'react-router-dom';


const EmployerView = ({ name, applications }) => {
    return (
        <div className='mx-8 md:flex justify-evenly'>
            <div className="bg-theme text-white p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Welcome, {name} (Employer)</h2>
                <h3 className="text-lg mb-2">Your Applications</h3>
                <ul>
                    {applications.length > 0 ? (
                        applications.map(id => (
                            <li key={id} className="mb-2">
                                <Link to={`/helper-details/${id}`} className="text-blue-400 hover:text-blue-200">
                                    Helper's ID: {id}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className='text-lg'>You have not applied for any applications yet.</p>
                    )}
                </ul>
            </div>
            <div className='p-6 text-center md:text-left'>
                <h2 className="text-2xl mb-4">View more Helpers</h2>
                {/* <h3 className="text-lg mb-2">Get in Touch with {5 - applications.length} more helpers for free</h3> */}
                <a href="/helpers" className="block mb-4">
                    <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"> 
                        More Helpers
                    </button>
                </a>
            </div>
        </div>
    );
};

export default EmployerView;
