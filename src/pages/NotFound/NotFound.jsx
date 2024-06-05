// src/pages/NotFound/NotFound.jsx
import React from 'react';
import logo from '../../assets/marofa.svg';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#14415A] text-white'>
      <img src={logo} alt='Marofa' className='w-32 h-32 mb-8 rounded-full' />
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-xl'>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
