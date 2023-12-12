import * as React from 'react';
import logo from '../../assets/marofa-logo-dark.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Modal from "../Modals/Modal";
import GetStartedContent from "../Modals/GetStartedContent";

import Logo from './Logo';


function Navbar() {
    //     const [isModalOpen, setIsModalOpen] = useState(false);

    //     // Event handler for opening the modal
    //     const openModal = () => {
    //         setIsModalOpen(true);
    //     };

    //     // Event handler for closing the modal
    //     const closeModal = () => {
    //         setIsModalOpen(false);
    //     };
    //     <div>
    //     <Modal open={isModalOpen} onClose={closeModal}>
    //         <GetStartedContent />
    //     </Modal>
    // </div>
    //  <button
    //  onClick={openModal}
    //  type="button"
    //  class="text-white bg-[#14415a] font-thin animate-pulse tracking-widest text-l px-4 py-2 text-center whitespace-nowrap hover:ring-2 hover:ring-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:animate-none">
    //  Get started
    // </button>
    return (


        <nav class="position-sticky border-gray-200 bg-[#14415a] p-2">
            <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-0 pb-0 mdnav:text-xl">
                <a /*href="*https://flowbite.com/"</div>*/ class="flex items-center space-x-0 rtl:space-x-reverse">
                    <img src={logo} class="h-[40px]" alt="MAROFA Logo" />
                    <span class="self-center font-semibold text-white">MAROFA</span>
                </a>
                <div class="flex mdnav:order-2 space-x-3 mdnav:space-x-0 rtl:space-x-reverse">
                    <Link to="/login"
                        type="button"
                        class="text-white bg-[#14415a] font-thin animate-pulse tracking-widest text-l px-4 py-2 text-center whitespace-nowrap hover:ring-2 hover:ring-white rounded-full focus:outline-none focus:ring-2 focus:ring-white hover:animate-none">
                        Get started
                    </Link>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg mdnav:hidden hover:bg-[#2E72D9] focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>
                <div class="items-center justify-between hidden w-full mdnav:flex mdnav:w-auto mdnav:order-1 pl-10 pr-10 " id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 mdnav:p-0 mt-4 border border-gray-100 rounded-lg bg-[#14415a] mdnav:space-x-[50px] rtl:space-x-reverse mdnav:flex-row mdnav:mt-0 mdnav:border-0 mdnav:bg-[#14415a]">
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-[#2E72D9] " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white font-thin rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">Profiles</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white font-thin rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white font-thin rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white font-thin rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">How it works</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}
export default Navbar;