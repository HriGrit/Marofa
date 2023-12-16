import React from 'react'
import dropdown from "../../../../assets/dropdown.svg";

const OrderHelpers = () => {
    return (
        <div className='flex flex-row gap-4 items-center'>
            <p className='text-theme text-xl font-semibold'>Order By:</p>
            <div className='bg-[#EFEFEF] w-40 flex justify-center items-center p-2 rounded-lg'>
                <select className='bg-[#EFEFEF] text-md outline-none'>
                    <option value="name">Last Active</option>
                    <option value="age">Publish Date</option>
                    <option value="experience">Start Date</option>
                </select>
            </div>
        </div>

    )
}

export default OrderHelpers