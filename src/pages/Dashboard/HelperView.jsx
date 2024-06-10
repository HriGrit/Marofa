import React from 'react';
import { Link } from 'react-router-dom';

const maxApplications = 5;

const CircleProgress = ({ applicationsCount }) => {
    const fillPercentage = (applicationsCount / maxApplications) * 100;
    const strokeDasharray = 283; // Approximate circumference of the circle (2 * Math.PI * 45)
    const strokeDashoffset = strokeDasharray - (fillPercentage * strokeDasharray) / 100;

    return (
        <svg className="transform -rotate-90" width="100" height="100">
                    <circle
                        className="text-gray-300"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-blue-500"
                        strokeWidth="10"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="20"
                        stroke="white"
                        fill='white'
                        transform='rotate(90, 50, 50)'
                    >
                        {applicationsCount}/{maxApplications}
                    </text>
                </svg>
    );
};

const HelperView = ({ name, applications }) => {
    return (
        <div className='flex justify-evenly'>
            <div className="bg-theme text-white p-6 rounded-lg">
                <h2 className="text-2xl mb-4">Welcome, {name} (Helper)</h2>
                <div className="flex justify-center mb-6">
                    <CircleProgress applicationsCount={applications.length} />
                </div>
                <h3 className="text-lg mb-2">Your Applications</h3>
                <ul>
                    {applications.length > 0 ? (
                        applications.map(id => (
                            <li key={id} className="mb-2">
                                <Link to={`/employers/${id}_employer`} className="text-blue-400 hover:text-blue-200">
                                    Application ID: {id}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>You have not applied to any jobs yet.</p>
                    )}
                </ul>
            </div>
            <div className='p-6'>
                <h2 className="text-2xl mb-4">Apply to more Employers</h2>
                {/* <h3 className="text-lg mb-2">Get in Touch with {5 - applications.length} more employers for free</h3> */}
                <a href="/employers" className="block mb-4">
                    <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"> 
                        More Employers
                    </button>
                </a>
            </div>
        </div>
    );
};

export default HelperView;
