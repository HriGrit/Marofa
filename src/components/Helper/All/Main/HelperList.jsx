import React, { useState, useEffect } from 'react';
import HelperCard from './HelperCard';
import SkeletonHelperCard from './SkeletonHelperCard';
import { firestore, auth } from "../../../../utils/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';

const HelperList = () => {
    const [helpers, setHelpers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authUser, setAuthUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            try {
              const user = auth.currentUser;

              if (!user) {
                  setAuthUser(true);
                  setLoading(false);
                  return;
              }

              const documentsRef = collection(firestore, 'documents');
              const q = query(documentsRef, where('role', '==', 'helper'));

              const querySnapshot = await getDocs(q);

              if (!querySnapshot.empty) {
                  const helpersList = querySnapshot.docs.map(doc => ({
                      id: doc.id,
                      ...doc.data(),
                  }));
                  setHelpers(helpersList);
              } else {
                  setHelpers([]);
              }
            } catch (error) {
                setError(error);
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // const users = helpers.map((helper) => ({
    //     id: helper.id,
    //     icon: helper.image,
    //     name: `${helper.personalInfoHelper?.firstName} ${helper.personalInfoHelper?.lastName}`,
    //     age: helper.personalInfoHelper?.dob,
    //     jobType: "Domestic Helper",
    //     status: helper.professionalInfoHelper?.currentWorkStatus,
    //     location: helper.jobPreferenceHelper?.preferredJobLocation,
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repellat aspernatur possimus natus officiis commodi id animi magni. Velit assumenda perferendis tempora quibusdam voluptate nostrum omnis provident molestias! Eius!",
    //     experience: helper.professionalInfoHelper?.yearsOfExperience,
    //     startDate: helper.professionalInfoHelper?.jobStartDate,
    //     jobDuration: "Full Time",
    //     active: "Active"
    // }));

    return (
        <div className='w-full flex flex-col gap-12'>
            {authUser ? (
                <div className='text-red-400 font-bold text-2xl m-auto'>
                    Sign in to view the Helpers List
                </div>
            ) : null}
            {loading ? (
                <>
                    <SkeletonHelperCard />
                </>
            ) : (
                helpers.map((item) => (
                    <HelperCard key={item.id} user={item} />
                ))
            )}
            {error && (
                <div className='text-red-400 font-bold text-2xl m-auto'>
                    Error fetching users: {error.message}
                </div>
            )}
        </div>
    );
};

export default HelperList;
