import React, { useState, useEffect } from 'react'
import HelperCard from './HelperCard'

import { firestore } from "../../../../utils/firebase";
import { collection, getDocs } from 'firebase/firestore';
import SkeletonHelperCard from './SkeletonHelperCard';

const HelperList = () => {
    const [helpers, setHelpers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const docRef = "users/helper/free";
        const collectionRef = collection(firestore, docRef);

        async function fetchUsers() {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collectionRef);
                const usersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setHelpers(usersList);
            } catch (error) {
                if (error.code === "permission-denied") {
                    setAuth(true);
                    console.error("User does not have permission to access this data");
                } else {
                console.error("Error fetching users: ", error);
                }
            }
            setLoading(false);
        }

        fetchUsers();
    }, []);
    // console.log(helpers);

    const users = helpers.map((helper) => ({
        id: helper.id,
        icon: helper.image,
        name: helper.personalInfoHelper?.firstName + " " + helper.personalInfoHelper?.lastName,
        age: helper.personalInfoHelper?.dob,
        jobType: "Domestic Helper",
        status: helper.professionalInfoHelper?.currentWorkStatus,
        location: helper.jobPreferenceHelper?.preferredJobLocation,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repellat aspernatur possimus natus officiis commodi id animi magni. Velit assumenda perferendis tempora quibusdam voluptate nostrum omnis provident molestias! Eius!",
        experience: helper.professionalInfoHelper?.yearsOfExperience,
        startDate: helper.professionalInfoHelper?.jobStartDate,
        jobDuration: "Full Time",
        active: "Active"
    }));

    return (
        <div className='w-full flex flex-col gap-12'>
            {auth ?  <div className=' text-red-400 font-bold text-2xl m-auto'>
                Sign in to view the Helpers List
            </div> : null}
            {loading ? (
                <>
                    <SkeletonHelperCard />
                    {/* <SkeletonHelperCard />
                    <SkeletonHelperCard /> */}
                </>
            ) : (
                users.map((item) => (
                    <HelperCard key={item.id} user={item} />
                ))
            )}
        </div>
    )
}

export default HelperList