import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Hero from '../../components/Hero/Hero';
import Profiles from '../../components/Body/Profiles/Profiles';
import RegisterSection from '../../components/Body/Register/RegisterSection';
import Pricing from '../../components/Body/Pricing/Pricing';
import FAQ from '../../components/Body/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            {isAuthenticated ? <div><Navbar /><Footer /></div> : <div>
                <Navbar />
                <Hero />
                <Profiles />
                <RegisterSection />
                <Pricing />
                <FAQ />
                <Footer />
            </div>}
        </div>
    );
};

export default Home;