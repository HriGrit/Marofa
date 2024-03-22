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
    const checkOut = (employers) => {
        employers.map((item, index) => {
            console.log(item);
        })
    };
    checkOut(employers);



    const user = {
        icon: "icon",
        heading: "Saudi Muslim family looking for a Muslim domestic helper.",
        size: "5 adults",
        nationality: "Saudi Arabian",
        location: "Saudi Arabia",
        need: "Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.Salam, We are looking for a Muslim domestic helper who is willing to work in Saudi Arabia nearby Madinah.",
        jobType: "Domestic Employer",
        jobDuration: "Full Time",
        startDate: "14th Jan 2024",
        status: "Active"
    }
    return (
        <div className='w-full'>
            <EmployerCard user={user} />
        </div>
    )
}

export default EmployerList