import React from 'react';

const SkeletonEmployerCard = () => {
    return (
        <div className={`flex p-2 border-2 shadow-sm rounded-md gap-2 mr-16 animate-pulse`}>
            <div className="flex">
                <div className="w-40 h-40 rounded-full bg-gray-300 mx-4 my-auto"></div>
            </div>
            <div className='space-y-2 w-1/2'>
                <div className='bg-gray-300 h-6 rounded-md'></div>
                <div className='flex gap-16'>
                    <div className='bg-gray-300 h-4 w-1/3 rounded-md'></div>
                    <div className='bg-gray-300 h-4 w-1/4 rounded-md'></div>
                </div>
                <div className='bg-gray-300 h-16 rounded-md'></div>
                <div className='flex space-x-6 mt-8'>
                    <div className='bg-gray-300 h-4 w-1/3 rounded-md'></div>
                    <div className='bg-gray-300 h-4 w-1/4 rounded-md'></div>
                    <div className='bg-gray-300 h-4 w-1/5 rounded-md'></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonEmployerCard;
