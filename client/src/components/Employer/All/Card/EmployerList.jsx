import React, { useState, useEffect } from 'react';
import EmployerCard from './EmployerCard';

import { firestore } from "../../../../utils/firebase";
import { collection, getDocs } from 'firebase/firestore';
import SkeletonEmployerCard from './SkeletonEmployerCard';

const EmployerList = () => {
    const [employers, setEmployers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = "users/employer/free";
        const collectionRef = collection(firestore, docRef);

        async function fetchUsers() {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collectionRef);
                const usersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEmployers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
            setLoading(false);
        }

        fetchUsers();
    }, []);

    const users = employers.map((employer) => ({
        id: employer.id,
        icon: employer.image,
        heading: employer.aboutJobEmployer?.jobTitle,
        size: employer.aboutEmployer?.FamilySize,
        nationality: employer.aboutEmployer?.Nationality,
        need: employer.aboutJobEmployer?.jobDescription,
        jobPosition: employer.jobOfferedEmployer.jobPosition,
        jobType: employer.jobOfferedEmployer.jobType,
        status: "Active"
    }));

    return (
        <div className='w-full flex flex-col gap-12'>
            {loading ? (
                <>
                    <SkeletonEmployerCard />
                    <SkeletonEmployerCard />
                    <SkeletonEmployerCard />
                </>
            ) : (
                users.map((item) => (
                    <EmployerCard key={item.id} user={item} />
                ))
            )}
        </div>
    );
}

export default EmployerList;
