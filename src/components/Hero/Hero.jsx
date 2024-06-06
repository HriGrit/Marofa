import React, { lazy, useState } from "react";
import { Link } from 'react-router-dom';
import ladyImg from "../../assets/landingpagefemale.webp";

import "./Hero.css";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../utils/firebase";

const Hero = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setName(user.displayName || ''); // Adjust based on what user property you want to set
            setIsAuthenticated(true);

            const fetchUser = async () => {
                const uid = user.uid;
                const documentsRef = collection(firestore, 'documents');
                const q = query(documentsRef, where('userId', '==', uid));

                try {
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const employerList = querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        setRole(employerList[0].role);
                        setData(employerList);
                    } else {
                        setRole([]);
                    }
                } catch (error) {
                    console.error('Error fetching documents:', error);
                }
            };

            fetchUser();
        } else {
            setIsAuthenticated(false);
            setRole([]);
        }
    });

      return () => {
          unsubscribe();
      };
  }, []);
  
  return (
    <section className="flex flex-col pt-[30px] app:pt-0 app:flex-row bg-gray-100 gap-2 justify-between items-center">
      <div className="space-y-4 text-center app:text-left pt-[30px] app:pt-0 h-fill app:mx-8">    
        {!(role === "employer") ? <h1 className="text-2xl app:text-xl text-gray-400 mb-2">Looking for a House help?</h1> : <h1 className="text-2xl app:text-xl text-gray-400 mb-2">Help?</h1>}
        {!(role === "employer") ? <h2 className="text-xl app:text-4xl font-hero text-gray-700 heroText">Find available helpers and maids in Saudi Arabia</h2> : <h2 className="text-xl app:text-4xl font-hero text-gray-700 heroText">Find available jobs in Saudi Arabia</h2>}
        {!(role === "employer") ? <p className="text-gray-400 xl:text-xl">Explore profiles and contact helpers directly</p> : <p className="text-gray-400 xl:text-xl">Explore job listings and apply directly</p>}
        <div className="flex flex-col app:flex-row space-y-2 app:space-y-0 app:space-x-5 pt-2">
          <Link to="/employers">
            <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"><p>For Employers</p></button>
          </Link>
          <Link to="/helpers">
            <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-green-600 transition duration-300 app:w-[150px]"><p>For Helpers</p></button>
          </Link>
        </div>
      </div>
      <div className="mx-0 mt-4 app:mt-0">
        <img src={ladyImg} alt="House helper" className="h-fill w-auto" width="400" height="400" />
      </div>
    </section>
  );
};

export default Hero;
