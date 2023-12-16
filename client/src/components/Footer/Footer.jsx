import React from 'react';
import logo from '../../assets/marofa-logo-footer.png';
import stripe from '../../assets/stripeimg.png';
const Footer = () => {
    return (
        <footer class="bg-[#F3F3F3] shadow-inner shadow-black shadow-4xl h-auto">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="flex justify-center items-center text-center">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src={logo} class="h-[80px] me-3 md:h-[100px]" alt="Footer logo" />
                        <span class="text-2xl text-theme font-semibold whitespace-nowrap md:text-4xl pt-0">MAROFA</span>
                    </a>
                </div>
                <div class="flex justify-center items-center text-center">
                    <div class="grid grid-cols-2 gap-8 sm:grid-cols-2 gap-4 flex justify-center">
                        <div>
                            <h2 class="mb-6 text-lg font-semibold text-[#2D2D2D] uppercase">Support</h2>
                            <ul class="text-[#5D5D5D] font-semibold">
                                <li class="mb-2">
                                    <a href="https://flowbite.com/" class="hover:underline">Contact us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Find helpers</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">FAQs</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">About us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-lg font-semibold text-[#2D2D2D] uppercase">Join us</h2>
                            <ul class="text-[#5D5D5D] font-semibold">
                                <li class="mb-2">
                                    <a href="https://flowbite.com/" class="hover:underline">Register</a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Log in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center pt-4">
                    <img src={stripe} class="h-[60px] me-3 md:h-[60px]" alt="stripepay" />
                </div>

                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="flex justify-center items-center text-center">
                    <span class="text-lg text-theme sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">MAROFA</a>. All Rights Reserved.
                    </span>
                </div>
            </div>


        </footer >
    );
};

export default Footer;



