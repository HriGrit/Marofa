// LoginPage.js
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            // Handle successful sign-in here
        } catch (error) {
            console.error(error);
            // Handle errors here (like user cancellation or network issues)
        }
    };

    const handleEmailSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful sign-in here
        } catch (error) {
            console.error(error);
            // Handle errors here (like invalid email/password)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-6 rounded shadow-lg">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </button>
                <div>
                    <input
                        className="border rounded p-2 mb-4 w-full"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="border rounded p-2 mb-4 w-full"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                        onClick={handleEmailSignIn}
                    >
                        Sign in with Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
