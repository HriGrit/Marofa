import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/Hero';
import Profiles from '../../components/Hero/Profiles';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Profiles />
        </>
    );
};

export default Home;