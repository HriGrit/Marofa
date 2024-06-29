import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
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

                            if (userData.role === 'employer') {
                                const applicationsRef = collection(firestore, 'applications');
                                const applicationsQuery = query(applicationsRef, where('employerId', '==', uid));
                                const applicationsSnapshot = await getDocs(applicationsQuery);

                                const applicationsData = applicationsSnapshot.docs.map(doc => doc.data().applications.Id).flat();
                                setApplications(applicationsData);
                            } else if (userData.role === 'helper') {
                                const applicationsRef = collection(firestore, 'applications');
                                const applicationsQuery = query(applicationsRef, where('helperId', '==', uid));
                                const applicationsSnapshot = await getDocs(applicationsQuery);

                                const employerIds = [];
                                applicationsSnapshot.forEach(doc => {
                                    const appData = doc.data();
                                    if (appData.employerId) {
                                        employerIds.push(appData.employerId);
                                    }
                                });
                                setApplications(employerIds);
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
                    ) : (
                        <HelperView name={name} applications={applications} />
                    )}
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Dashboard;
