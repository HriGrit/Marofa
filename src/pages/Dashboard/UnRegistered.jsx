import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnRegistered = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl mb-6 font-bold text-blue-900">Welcome, Guest</h2>
        <h3 className="text-xl mb-4 text-gray-700">You have not signed up yet</h3>
        <p className="text-lg mb-6 text-gray-600">Please sign up to access the dashboard</p>

        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => navigate("/register")}
        >
          Become a Helper or an Employer
        </button>
      </div>
    </div>
  );
}

export default UnRegistered;