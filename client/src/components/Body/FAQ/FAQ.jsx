import React from 'react';
import "./FAQ.css";
import dropdown from "../../../assets/dropdown.svg";
const FAQ = () => {
    return (
        <div>
            <div className='dimmed-bg space-y-12 pb-20'>
                <div className='text-center pt-20 space-y-3 '>
                    <h2 className=' text-md'>Need Help?</h2>
                    <h4 className=' text-4xl'>FAQs</h4>
                    <hr className='w-[40px] mx-auto h-1 bg-[#123750]' />
                </div>
                <div className='flex flex-wrap justify-evenly mx-[5%] text-white gap-1'>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>How do I find a Nanny using Marofa?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>Does Marofa Verify Profiles that are posted?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>What is the salary for the nanny?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>What if I register and don't find my nanny?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>How much does Marofa charge for their service?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className='w-full app:w-5/12 bg-[#123750] p-4'>
                        <div className='flex flex-row justify-between mx-2 text-xl'>
                            <p>Are the nanny sponsored / have their own visa?</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;