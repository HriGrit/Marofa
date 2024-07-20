import React, { useState, useEffect } from 'react';
import EmployerCard from './EmployerCard';

import { firestore, auth } from "../../../../utils/firebase";
import { collection, getDocs, where, query } from 'firebase/firestore';
import SkeletonEmployerCard from './SkeletonEmployerCard';

const EmployerList = () => {
    const [employers, setEmployers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authUser, setAuthUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            try {
              const user = auth.currentUser;

            //   if (!user) {
            //       setAuthUser(true);
            //       setLoading(false);
            //       return;
            //   }

              const documentsRef = collection(firestore, 'documents');
              const q = query(documentsRef, where('role', '==', 'employer'));

              const querySnapshot = await getDocs(q);

              if (!querySnapshot.empty) {
                  const employerList = querySnapshot.docs.map(doc => ({
                      id: doc.id,
                      ...doc.data(),
                  }));
                  setEmployers(employerList);
              } else {
                  setEmployers([]);
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
    
    const employersToShow = authUser ? employers : employers.slice(0, 5);

    return (
        <div className='w-full flex flex-col gap-12'>
            {authUser ?  <div className='text-red-400 font-bold text-2xl m-auto'>
                Sign in to view the Employers List
            </div> : null}
            {loading ? (
                <>
                    <SkeletonEmployerCard />
                    <SkeletonEmployerCard />
                </>
            ) : (
                authUser ? (
                    employersToShow.map((item) => (
                        <EmployerCard key={item.id} user={item} />
                    ))
                ) : (
                    employers.map((item) => (
                        <EmployerCard key={item.id} user={item} />
                    ))
                )
            )}
        </div>
    );
}

export default EmployerList;
