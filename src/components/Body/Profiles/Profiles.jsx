import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { firestore } from '../../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Profiles = () => {
    const [helpers, setHelpers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHelpers = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'documents'));
                // Filter documents ending with '_helper'
                const filteredHelpers = querySnapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter(helper => helper.id.endsWith('_helper'));

                // Shuffle and pick 5 random helpers
                const shuffledHelpers = filteredHelpers.sort(() => 0.4 - Math.random());
                const selectedHelpers = shuffledHelpers.slice(0, 4);

                setHelpers(selectedHelpers);
            } catch (error) {
                console.error("Error fetching helpers: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHelpers();
    }, []);

    return (
        <div className="py-10" id="profiles">
            <div className="text-center">
                <h4 className="font-semibold text-3xl text-[#14415A] mt-10">
                    View Available Helpers
                </h4>
            </div>

            <div className="flex justify-center items-center mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-[200px] h-[400px]">
                                <Skeleton height={400} />
                            </div>
                        ))
                    ) : (
                        helpers.map(helper => (
                            <div key={helper.id} className="flex justify-center">
                                <Cards helper={helper} />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="text-center mt-5">
                <h5 className="font-semibold text-1.5rem text-[#ACA5A4]">
                    Several helpers are waiting for you
                </h5>
            </div>

            <div className="text-center my-4">
                <Link to="/helpers" className="bg-[#14415a] text-white py-3 px-7 rounded-full font-normal my-auto">
                    View all Profiles
                </Link>
            </div>
        </div>
    );
};

export default Profiles;
