import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';

import { auth, firestore } from '../../utils/firebase';
import { getDoc } from 'firebase/firestore';
import HelperView from './HelperView';
import EmployerView from './EmployerView';
import Loader from '../Loader';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState('');
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName || ''); // Adjust based on what user property you want to set
                setIsAuthenticated(true);

                const fetchUserRole = async () => {
                    const uid = user.uid;
                    const documentsRef = collection(firestore, 'documents');
                    const q = query(documentsRef, where('userId', '==', uid));

                    try {
                        const querySnapshot = await getDocs(q);

                        if (!querySnapshot.empty) {
                            const userData = querySnapshot.docs[0].data();
                            setRole(userData.role);

                            // Fetch applications
                            const docRef = querySnapshot.docs[0].ref;
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                setApplications(docSnap.data().applications?.Id || []);
                            }
                        } else {
                            setRole('');
                            setApplications([]);
                        }
                    } catch (error) {
                        console.error('Error fetching documents:', error);
                        toast.error('Error fetching documents');
                    }
                };

                fetchUserRole();
            } else {
                setIsAuthenticated(false);
                setRole('');
                setApplications([]);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <Toaster position="top-center" />
            {isAuthenticated ? (
                <div className='my-16'>
                    {role === 'employer' ? (
                        <EmployerView name={name} applications={applications} />
                    ) : role === 'helper' ? (
                        <HelperView name={name} applications={applications} />
                    ) : (
                        <Loader />
                    )}
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Dashboard;
