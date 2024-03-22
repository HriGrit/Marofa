import React, { useEffect, useState } from 'react'

import Helper from "../../../../assets/cardpic.svg"
import location from "../../../../assets/location.svg"
import experiencestar from "../../../../assets/experiencestar.svg"
import calender from "../../../../assets/calender.svg"
import active from "../../../../assets/active.svg"

import { firestore } from "../../../../utils/firebase";
import { collection, getDocs } from 'firebase/firestore'

const HelperCard = () => {
    const [helpers, setHelpers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = "users/helper/free";
        const collectionRef = collection(firestore, docRef);

        async function fetchUsers() {
            try {
                const querySnapshot = await getDocs(collectionRef);
                const usersList = [];
                querySnapshot.forEach((doc) => {
                    usersList.push({ id: doc.id, ...doc.data() });
                });
                setHelpers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        }

        fetchUsers();
    }, []);
    console.log(helpers);

    const helperItem = {
        icon: "icon",
        name: "Dua Lipa",
        age: "32 yr",
        jobType: "Domestic Helper",
        status: "Finished Contract",
        location: "Saudi Arabia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident repellat aspernatur possimus natus officiis commodi id animi magni. Velit assumenda perferendis tempora quibusdam voluptate nostrum omnis provident molestias! Eius!",
        experience: "3",
        startDate: "20th Dec 2023",
        jobDuration: "Full Time",
        active: "Very Active"
    }

    return (
        <div className='flex flex-row p-2 border-2 shadow-lg rounded-md gap-6'>
            <div className='w-1/4'>
                <div className="w-40 h-40 rounded-full bg-cover bg-center m-4 border-2 border-theme my-auto" style={{ backgroundImage: `url(${helpers[0]?.image})` }}></div>
            </div>
            <div className='space-y-2'>
                <div>
                    <p className='text-theme font-bold'>{helperItem.name} - {helperItem.age} yr</p>
                </div>
                <div className='flex flex-row gap-12'>
                    <p>{helperItem.jobType} - {helperItem.status}</p>
                    <div className='flex flex-row gap-2'>
                        <img src={location} alt="location" className='w-3' />
                        <p className='text-theme font-semibold text-md my-auto'>{helperItem.location}</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <p>{helperItem.description}</p>
                </div>
                <div className='flex flex-row space-x-6'>
                    <div className='flex flex-row items-center'>
                        <img src={experiencestar} alt="experiencestar" className='w-5 mr-1' />
                        <p className=''>{helperItem.experience} yr Experience</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={calender} alt="calender" className='w-5 mr-2' />
                        <p>From {helperItem.startDate} | {helperItem.jobDuration}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={active} alt="active" className='w-5 mr-2' />
                        <p>{helperItem.active}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelperCard