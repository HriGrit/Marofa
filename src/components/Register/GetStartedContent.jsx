import React from "react";
import toast, {Toaster} from "react-hot-toast";
import Navbar from '../../components/Navbar/navbar';

import logo from "../../assets/marofa-whitebg.svg";
import emplogo from "../../assets/employerlogo.png";
import helperlogo from "../../assets/helperlogo.png";
import { useEffect } from "react";

function GetStartedContent({ setRole, accountExist }) {
    const handleRoleSelection = (role) => {
        setRole(role);
    };
    
    useEffect(() => {
        if (accountExist) {
            toast.error("Account already exists. Re-Enter form details to update existing one.", {
                duration: 5000, // Duration in milliseconds (adjust as needed)
                style: {
                    color: '#990000', // Text color
                },
            });
        }
    }, [accountExist]);

    return (
        <div className="h-[100vh] flex flex-col justify-between">
            <Navbar />
            <Toaster />
            <div className="w-fit mx-auto my-auto p-8 rounded-2xl border-4 bg-white shadow-md">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-theme sm:text-3xl">MAROFA</span>
                </div>
                <hr className="my-2 border-theme border-[1px] rounded sm:mx-auto lg:my-2 " />
                <div className="text-center mb-6 pt-4">
                    <span className="text-xl text-align:center font-bold text-theme sm:text-3xl">Select your role</span>
                    <hr className="my-2 mx-auto w-[100px] border-theme border-[1px] rounded sm:w-[150px] lg:my-2" />
                </div>

                <div className="flex justify-center gap-4 flex-col sm:flex-row">
                    {/* <!-- Employer Card --> */}
                    <div className="cursor-pointer bg-white shadow-lg border-gray border-[1px] rounded-lg max-w-sm p-6
                    transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        onClick={() => handleRoleSelection('employer')}>
                        <div className="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full mx-auto">
                            <img src={emplogo} alt="Employer" className="h-12 w-12" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-semibold text-theme">Employer</h3>
                            <p className="text-sm mt-2 text-gray-600 sm:text-xl">Be in touch with thousands of candidates and connect with the right one.</p>
                        </div>
                    </div>

                    {/* <!-- Helper Card --> */}
                    <div className="cursor-pointer border-gray border-[1px] bg-white shadow-lg rounded-lg max-w-sm p-6
                    transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        onClick={() => handleRoleSelection('helper')}>
                        <div className="flex items-center justify-center h-20 w-20 bg-gray-200 rounded-full mx-auto">
                            <img src={helperlogo} alt="Helper" className="h-12 w-10" />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-semibold text-theme">Helper</h3>
                            <p className="text-sm mt-2 text-gray-600 sm:text-xl">Get a chance to freely choose your future employer and be hired.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GetStartedContent;