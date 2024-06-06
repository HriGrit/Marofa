import React from 'react';
import SvgIcon1 from '../../../assets/svg1.svg'; // Update with the correct path
import SvgIcon2 from '../../../assets/svg2.svg'; // Update with the correct path
import SvgIcon3 from '../../../assets/svg3.svg'; // Update with the correct path

const RegisterSection = () => {
    return (
        <div id="steps" className="py-8">
            <div className='bg-[#F5F7FA] py-12'>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-4">
                        3 simple & easy steps to find your helper
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-8 gap-8">
                    <div className="text-center max-w-sm">
                        <img src={SvgIcon1} alt="Explore" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">1. Explore</h3>
                        <p>Explore hundreds of profiles ready to start in Saudi Arabia</p>
                    </div>

                    <div className="text-center max-w-sm">
                        <img src={SvgIcon2} alt="Subscribe" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">2. Subscribe</h3>
                        <p>Subscribe from 100 SAR per week and get access to helpers contact details</p>
                    </div>

                    <div className="text-center max-w-sm">
                        <img src={SvgIcon3} alt="Contact" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">3. Contact</h3>
                        <p>Contact helpers directly - saving thousands on agency fees</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-semibold text-[#14415A]">
                    "Discover Your Ideal Helper in Saudi Arabia with Ease and Speed"
                </h2>
            </div>
        </div>
    );
};

export default RegisterSection;
