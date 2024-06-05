import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, firestore } from '../../utils/firebase';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName || ''); // Adjust based on what user property you want to set
                setIsAuthenticated(true);

                const fetchUser = async () => {
                    const uid = user.uid;
                    const documentsRef = collection(firestore, 'documents');
                    const q = query(documentsRef, where('userId', '==', uid));

                    try {
                        const querySnapshot = await getDocs(q);

                        if (!querySnapshot.empty) {
                            const employerList = querySnapshot.docs.map(doc => ({
                                id: doc.id,
                                ...doc.data(),
                            }));
                            console.log(employerList);
                            setData(employerList);
                        } else {
                            setData([]);
                        }
                    } catch (error) {
                        console.error('Error fetching documents:', error);
                    }
                };

                fetchUser();
            } else {
                setIsAuthenticated(false);
                setData([]);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    {data[0]?.role === 'employer' ? <h2>Welcome {name}</h2>: <h2>Not an employer</h2>}
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Dashboard;
