import React from 'react';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const Profiles = () => {
    return (
        <div className="py-10" id="profiles">
            <div className="text-center">
                <h4 className="font-semibold text-3xl text-[#14415A] mt-10">
                    View Available Helpers
                </h4>
            </div>

            <div className="flex justify-center items-center mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <h5 className="font-semibold text-1.5rem text-[#ACA5A4]">
                    Several helpers are waiting for you
                </h5>
            </div>

            <div className="text-center my-4">
                <Link to="/helpers" className="bg-[#14415a] text-white py-3 px-7 rounded-full font-normal my-auto">
                    View all Profiles
                </Link>
            </div>
        </div>
    );
};

export default Profiles;
