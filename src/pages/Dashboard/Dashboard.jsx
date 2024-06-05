import React, {useEffect, useState} from 'react'


import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Dashboard = () => {
    const [name, setname] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.uid);
                setname(user.displayName);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className='m-3'>
            <div>Welcome {name}</div>
        </div>
    )
}

export default Dashboard