import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../assets/marofa-logo-dark.svg';


const pages = ['Home', 'Pricing', 'How it Works'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const auth = ["Register", "Login"];

import Logo from './Logo';

function Navbar() {



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (


        <nav class="border-gray-200 bg-[#14415a]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-0 pb-0 mdnav:text-2xl">
                <a /*href="*https://flowbite.com/"</div>*/ class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-20" alt="MAROFA Logo" />
                    <span class="self-center text-4xl font-semibold text-white  whitespace-nowrap">MAROFA</span>
                </a>
                <div class="flex mdnav:order-2 space-x-3 mdnav:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="text-white bg-[#14415a] hover:bg-[#2E72D9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl px-4 py-2 text-center whitespace-nowrap">Get started</button>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg mdnav:hidden hover:bg-[#2E72D9] focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full mdnav:flex mdnav:w-auto mdnav:order-1 pl-10 pr-10 " id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 mdnav:p-0 mt-4 border border-gray-100 rounded-lg bg-[#14415a] mdnav:space-x-8 rtl:space-x-reverse mdnav:flex-row mdnav:mt-0 mdnav:border-0 mdnav:bg-[#14415a]">
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-[#2E72D9] " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">Profiles</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:bg-[#14415a] md:hover:bg-transparent md:hover:text-[#2E72D9]">How it works</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;