import React from 'react';
import logo from '../../../assets/marofa-logo-footer.png';
const Footer = () => {
    return (
        <footer class="bg-[#F3F3F3]">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src={logo} class="h-[100px]  me-3 md:h-[140px]" alt="Footer logo" />
                            <span class="self-center text-4xl font-[#14415A] font-semibold whitespace-nowrap md:text-6xl">MAROFA</span>
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;