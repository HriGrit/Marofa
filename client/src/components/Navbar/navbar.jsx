import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';

import { useAuth } from '../../Context/AuthContext';
import GetStartedContent from '../Register/GetStartedContent';

import logo from '../../assets/marofa-logo-dark.svg';

function Navbar() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [hasCompletedForm, setHasCompletedForm] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const goToRegister = () => {
        navigate('/register');
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            console.log('User signed out successfully');
            navigate('/'); // Redirect to sign-in page after sign out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="position-sticky border-gray-200 bg-[#14415a] p-2">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 pt-0 pb-0 mdnav:text-xl">
                <Link to="/">
                    <div className="flex items-center space-x-0 rtl:space-x-reverse">
                        <img src={logo} className="h-[40px]" alt="MAROFA Logo" />
                        <span className="self-center font-semibold text-white">MAROFA</span>
                    </div>
                </Link>
                <div className="flex mdnav:order-2 space-x-3 mdnav:space-x-0 rtl:space-x-reverse">
                    {currentUser ? (
                        <div className=' cursor-pointer outline-none flex flex-row gap-4'>
                            <div
                                className="text-white bg-[#14415a] font-thin animate-pulse tracking-widest text-l px-4 py-2 text-center whitespace-nowrap hover:ring-2 hover:ring-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:animate-none"
                                onClick={goToRegister}
                            >
                                Get started
                            </div>
                            <AuthenticatedUserView
                                user={currentUser}
                                profileDropdownOpen={profileDropdownOpen}
                                setProfileDropdownOpen={setProfileDropdownOpen}
                                signOut={signOut}
                            />
                        </div>) : <div>
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
                            <Link to="/#profiles"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]"
                            >
                                Profiles
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#pricing"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#faq"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#steps"
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="block py-2 px-3 mdnav:p-0 text-white font-thin rounded hover:bg-[#14415a] mdnav:hover:bg-transparent mdnav:hover:text-[#2E72D9]">
                                How it works
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {open && <GetStartedContent setOpen={setOpen} />}
        </nav >


    );
}

const AuthenticatedUserView = ({ user, profileDropdownOpen, setProfileDropdownOpen, signOut }) => {
    const userProfileImage = user.photoURL || "../../assets/uploadpic.svg";

    return (
        <div className="relative">
            <div onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="cursor-pointer w-12 h-12 rounded-full overflow-hidden">
                <img src={userProfileImage} alt="Profile" />
            </div>
            {profileDropdownOpen && (
                <div className="absolute right-0 w-48 bg-theme text-white rounded-2xl shadow-xl z-20  border-4 border-black">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm capitalize hover:bg-blue-700 rounded-t-2xl"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        See profile
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm capitalize hover:bg-blue-700 rounded-b-2xl"
                        onClick={(e) => {
                            e.preventDefault();
                            signOut();
                        }}
                    >
                        Sign out
                    </a>

                </div>
            )}
        </div>
    );
};

export default Navbar;
