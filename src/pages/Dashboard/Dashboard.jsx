import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';
import { auth, firestore } from '../../utils/firebase';
import HelperView from './HelperView';
import EmployerView from './EmployerView';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState('');
    const [applications, setApplications] = useState([]);
    const [applied, setApplied] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName || '');
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

                            const docRef = querySnapshot.docs[0].ref;
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                setApplications(docSnap.data().applied?.Id || []);
                                setApplied(docSnap.data().applications?.Id || []);
                            }
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
                <div className='my-16 mb-4'>
                    {role === 'employer' ? (
                        <EmployerView name={name} applications={applications} applied={applied} />
                    ) : (
                        <HelperView name={name} applications={applications} applied={applied} />
                    )}
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Dashboard;
