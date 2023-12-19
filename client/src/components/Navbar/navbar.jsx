import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/marofa-logo-dark.svg';

import { useAuth } from '../../Context/AuthContext';
import GetStartedContent from '../Modals/GetStartedContent';

function Navbar() {
    const { currentUser } = useAuth();

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    console.log(open);
    const handlePopUp = () => {
        setOpen(!open);
    };

    return (
        <nav className="position-sticky border-gray-200 bg-[#14415a] p-2">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 pt-0 pb-0 mdnav:text-xl">
                <a className="flex items-center space-x-0 rtl:space-x-reverse">
                    <img src={logo} className="h-[40px]" alt="MAROFA Logo" />
                    <span className="self-center font-semibold text-white">MAROFA</span>
                </a>
                <div className="flex mdnav:order-2 space-x-3 mdnav:space-x-0 rtl:space-x-reverse">
                    {currentUser ? (
                        <div onClick={handlePopUp} className=' cursor-pointer outline-none flex flex-row gap-4'><AuthenticatedUserView user={currentUser} /><div
                            className="text-white bg-[#14415a] font-thin animate-pulse tracking-widest text-l px-4 py-2 text-center whitespace-nowrap hover:ring-2 hover:ring-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:animate-none"
                            onClick={handlePopUp}
                        >
                            Get started
                        </div></div>) : <div>
                        <Link
                            to="/signIn"
                            type="button"
                            className="text-white bg-[#14415a] font-thin animate-pulse tracking-widest text-l px-4 py-2 text-center whitespace-nowrap hover:ring-2 hover:ring-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:animate-none"
                        >
                            Sign In
                        </Link>
                    </div>}

                    <button
                        onClick={toggleNav}
                        type="button"
                        data-collapse-toggle="navbar-cta"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg mdnav:hidden hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full mdnav:flex mdnav:w-auto mdnav:order-1 pl-10 pr-10 ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 mdnav:p-0 mt-4 rounded-lg bg-[#14415a] mdnav:space-x-[50px] rtl:space-x-reverse mdnav:flex-row mdnav:mt-0 mdnav:border-0 mdnav:bg-[#14415a]">
                        <li>
                            <Link to="/">
                                <a href="#" className="block py-2 px-3 mdnav:p-0 text-white bg-blue-700 rounded mdnav:bg-transparent mdnav:text-[#2E72D9]" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">Profiles</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">FAQs</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">How it works</a>
                        </li>
                    </ul>
                </div>
            </div>
            {open && <GetStartedContent setOpen={setOpen} />}
        </nav >


    );
}

const AuthenticatedUserView = ({ user }) => {
    // You might want to check if user has a photoURL
    const userProfileImage = user.photoURL || "../../assets/uploadpic.svg";

    return (
        <div className="w-12 rounded-[50%]">
            <img src={userProfileImage} alt="Profile" className='rounded-[50%]' />
        </div>
    );
};

export default Navbar;