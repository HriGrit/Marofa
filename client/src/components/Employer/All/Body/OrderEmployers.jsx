import React from 'react';
import dropdown from '../../../../assets/dropdown.svg';

const OrderEmployers = () => {
    return (
        <div className='flex flex-row gap-4 items-center'>
            <p className='text-theme text-xl font-semibold'>Order By:</p>
            <div className='bg-[#EFEFEF] flex justify-center items-center p-2 rounded-lg' style={{ height: '40px' }}>
                <select className='bg-[#EFEFEF] text-md outline-none appearance-none' style={{ height: '40px' }}>
                    <option value="name">Last Active</option>
                    <option value="age">Publish Date</option>
                    <option value="experience">Start Date</option>
                </select>
                <img src={dropdown} alt='dropdown' className='h-4 w-4' />
            </div>
        </div>
    );
};

export default OrderEmployers;