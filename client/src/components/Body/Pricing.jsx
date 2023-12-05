// Pricing.jsx
import React from 'react';
import "./Pricing.css";

const Pricing = () => {
    return (
        <div class="dimmed-bg h-[100vh] flex flex-col gap-4" >
            <div className='text-center pt-20 space-y-3'>
                <h2 className=' text-md'>Pricing</h2>
                <h4 className=' text-4xl'>Our Plans</h4>
                <hr className='w-[40px] mx-auto h-1 bg-[#123750]' />
                <h2 className=' text-black text-opacity-60'>One time fee - No automatic renewal & No additional agency fee</h2>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <div className='flex flex-col bg-grey-200 text-center p-4 space-y-6 border-2 border-black bg-white rounded-2xl'>
                    <div className='flex flex-col mt-2 text-[#666666] '>
                        <p className='text-xl font-medium'>Standard</p>
                        <p className='text-xs'>Plan</p>
                    </div>
                    <div className='space-y-6'>
                        <p className='text-[#123750] text-2xl'>FREE</p>
                        <p className='text-sm'>1 CONTRACT</p>
                    </div>
                    <div className='flex flex-col text-[#5D5D5D] text-sm space-y-3'>
                        <p>New profiles every 24h</p>
                        <p>Full database access - 1 profile</p>
                        <p>Personal space to manage your shortlist</p>
                        <p>Directly contact helper</p>
                    </div>
                    <div>
                        <button className='p-3 px-6 bg-[#123750] text-white rounded-[24px] text-sm'>Get Started</button>
                    </div>
                </div>
                <div className='flex flex-col bg-grey-200 text-center space-y-6 border-2 border-black bg-white rounded-2xl'>
                    <div className='flex flex-col py-4 text-white bg-[#123750] rounded-t-xl'>
                        <p className='text-xl font-medium'>Premium</p>
                        <p className='text-xs'>Plan</p>
                    </div>

                    <div className='space-y-6 px-4'>
                        <div className='flex flex-row bg-red-200'>
                            <p className='text-[#123750] text-lg line-through mt-auto'>SAR 195</p>
                            <p className='text-[#123750] text-2xl my-auto'>SAR</p>
                            <p className='text-5xl'>100</p>
                        </div>
                        <p className='text-sm'>1 CONTRACT</p>
                    </div>
                    <div className='flex flex-col text-[#5D5D5D] text-sm space-y-3 px-4'>
                        <p>New profiles every 24h</p>
                        <p>Full database access - 1 profile</p>
                        <p>Personal space to manage your shortlist</p>
                        <p>Directly contact helper</p>
                    </div>
                    <div className='px-4 pb-4'>
                        <button className='p-3 px-6 bg-[#123750] text-white rounded-[24px] text-sm'>Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Pricing;
