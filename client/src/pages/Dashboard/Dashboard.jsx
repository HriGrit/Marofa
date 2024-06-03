import React, {useEffect, useState} from 'react'


import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Dashboard = () => {
    const [name, setname] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setname(user.displayName);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className=' m-3'>
            <div>Welcome {name}</div>
        </div>
    )
}

export default Dashboard