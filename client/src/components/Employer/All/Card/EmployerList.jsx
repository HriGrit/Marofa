import React, { useState, useEffect } from 'react'
import EmployerCard from './EmployerCard'

import { firestore } from "../../../../utils/firebase";
import { collection, getDocs } from 'firebase/firestore'

const EmployerList = () => {
    const [employers, setEmployers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = "users/employer/free";
        const collectionRef = collection(firestore, docRef);

        async function fetchUsers() {
            try {
                const querySnapshot = await getDocs(collectionRef);
                const usersList = [];
                querySnapshot.forEach((doc) => {
                    usersList.push({ id: doc.id, ...doc.data() });
                });
                setEmployers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        }

        fetchUsers();
    }, []);
    console.log(employers);
    var user = [];
    const checkOut = (employers) => {
        employers.map((item, index) => {
            user[index] = {
                icon: item.image,
                heading: item.aboutJobEmployer?.jobTitle,
                size: item.aboutEmployer?.FamilySize,
                nationality: item.aboutEmployer?.Nationality,
                // location: "Saudi Arabia",
                need: item.aboutJobEmployer?.jobDescription,
                jobPosition: item.jobOfferedEmployer.jobPosition,
                jobType: item.jobOfferedEmployer.jobType,
                // jobDuration: "Full Time",
                // startDate: "14th Jan 2024",
                status: "Active"
            }
        })
    };

    checkOut(employers);

    return (
        <div className='w-full flex flex-col gap-12'>
            {user.map((item, index) => {
                return (
                    <EmployerCard user={item} />
                );
            })}
        </div>
    )
}

export default EmployerList