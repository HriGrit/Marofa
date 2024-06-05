import React from 'react';

const SkeletonHelper = () => {
    return (
        <div className='border-2 shadow-md'>
            <div className='flex gap-5 p-6 pl-12'>
                <div className='w-24 h-24 bg-gray-300 rounded-full animate-pulse'></div>
                <div className='flex-1 space-y-3'>
                    <div className='h-6 bg-gray-300 rounded animate-pulse'></div>
                    <div className='h-6 bg-gray-300 rounded w-3/4 animate-pulse'></div>
                    <div className='flex justify-between'>
                        <div className='h-6 bg-gray-300 rounded w-1/4 animate-pulse'></div>
                        <div className='w-24 h-10 bg-gray-300 rounded animate-pulse'></div>
                    </div>
                </div>
            </div>
            <div className='pl-6'>
                <div className='h-6 bg-gray-300 rounded w-1/2 py-2 animate-pulse'></div>
            </div>
            <div className='grid grid-cols-12 mx-16 my-8 gap-8'>
                <div className='col-span-12 md:col-span-6 space-y-2'>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='flex gap-2'>
                            <div className='w-4 h-4 bg-gray-300 rounded animate-pulse'></div>
                            <div className='h-6 bg-gray-300 rounded flex-1 animate-pulse'></div>
                        </div>
                    ))}
                </div>
                <div className='col-span-12 md:col-span-6 space-y-2'>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='flex gap-2'>
                            <div className='w-4 h-4 bg-gray-300 rounded animate-pulse'></div>
                            <div className='h-6 bg-gray-300 rounded flex-1 animate-pulse'></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-6'>
                <div className='h-6 bg-gray-300 rounded w-1/2 py-2 animate-pulse'></div>
            </div>
            <div className='p-6 ml-6 mt-8 h-[10px] bg-gray-300 animate-pulse'></div>
            <div className='pl-6 mt-8'>
                <div className='h-6 bg-gray-300 rounded w-1/2 py-2 animate-pulse'></div>
            </div>
            <div className='p-6 pl-16 space-y-4 animate-pulse'>
                <div className='flex gap-2'>
                    <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='h-4 bg-gray-300 rounded w-1/4'></div>
                        <div className='flex gap-2'>
                            <div className='w-20 h-6 bg-gray-300 rounded'></div>
                            <div className='w-20 h-6 bg-gray-300 rounded'></div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='h-4 bg-gray-300 rounded w-1/4'></div>
                        <div className='flex gap-2'>
                            <div className='w-20 h-6 bg-gray-300 rounded'></div>
                            <div className='w-20 h-6 bg-gray-300 rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonHelper;
