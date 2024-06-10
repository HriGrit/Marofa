// src/pages/ComingSoon/ComingSoon.jsx
import React from 'react';
import logo from '../assets/marofa.svg';

const ComingSoon = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#14415A] text-white'>
      <img src={logo} alt='Marofa' className='w-32 h-32 mb-8 rounded-full' />
      <h1 className='text-4xl font-bold mb-4'>Feature in Progress: Thanks for Your Patience!</h1>
      <p className='text-xl'>This feature is currently under development. We appreciate your understanding!</p>
    </div>
  );
};

export default ComingSoon;
