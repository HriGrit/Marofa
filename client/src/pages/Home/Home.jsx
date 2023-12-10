import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/Hero';
import Profiles from '../../components/Body/Profiles/Profiles';
import RegisterSection from '../../components/Body/Register/RegisterSection';
import Pricing from '../../components/Body/Pricing/Pricing';
import FAQ from '../../components/Body/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Profiles />
            <RegisterSection />
            <Pricing />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;