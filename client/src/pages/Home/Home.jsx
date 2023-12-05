import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/Hero';
import Profiles from '../../components/Body/Profiles/Profiles'
import RegisterSection from '../../components/Body/Register/RegisterSection';
import Pricing from '../../components/Body/Pricing/Pricing';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Profiles />
            <RegisterSection />
            <Pricing />
        </>
    );
};

export default Home;