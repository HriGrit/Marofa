import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../utils/firebase';

import logo from "../../assets/marofa-whitebg.svg";
import GoogleImg from '../../assets/google.png';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formFields, setFormFields] = useState({ email: '', password: '', confirmPassword: '' });

    const signUp = async () => {
        if (formFields.password !== formFields.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        setShowLoader(true);
        try {
            await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
            toast.success("Successfully signed up!");
            navigate('/dashboard'); // Redirect after successful sign up
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setShowLoader(false);
        }
    };

    const onChangeField = (e) => {
        const { name, value } = e.target;
        setFormFields(prevState => ({ ...prevState, [name]: value }));
    };

    const signInWithGoogle = async () => {
        setShowLoader(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            localStorage.setItem('uid', result.user.uid);
            toast.success("Signed in with Google!");
            navigate('/');
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setShowLoader(false);
        }
    };

    return (
        <div>
            <Toaster />
            {showLoader && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white" role="status"></div>
                </div>
            )}
            <div className="mt-[60px] mb-[60px] border-4 pb-6 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span className="self-center text-xl font-semibold text-[#14415A] sm:text-3xl">MAROFA</span>
                </div>
                <hr className="my-2 border-[#14415A] border-[1px] rounded sm:mx-auto lg:my-2" />
                <div className="text-center mb-2 pt-4">
                    <span className="text-l font-thin text-[#14415A] sm:text-m">Sign up</span>
                </div>

                <form className='flex flex-col items-center p-0'>
                    <div className='form-group mt-5 mb-4 w-100 signInOr'>
                        <button type="button" className="flex items-center bg-white hover:bg-[#e6e6e6] focus:ring-1 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center me-2 mb-2"
                            onClick={signInWithGoogle}>
                            <img src={GoogleImg} alt="Google" className='w-10 h-10' />
                            <p className="text-[#14415a] ml-2">Sign Up with Google</p>
                        </button>
                        <div className="flex items-center justify-center w-full relative">
                            <hr className="w-64 h-px my-8 bg-[#14415A] border-0" />
                            <span className="absolute px-3 font-thin text-[#14415A] -translate-x-1/2 bg-white left-1/2">or sign up with E-mail</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4'>
                        <input id="email" type="email" name='email' placeholder="Email" className='w-[300px] sm:w-[360px] p-2 border border-gray-300 rounded'
                            onChange={onChangeField} value={formFields.email}
                        />
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4 relative'>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder="Password"
                            className='w-[300px] sm:w-[360px] p-2 border border-gray-300 rounded'
                            onChange={onChangeField}
                            value={formFields.password}
                        />
                        <button type="button" className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4 relative'>
                        <input
                            id="confirmPassword"
                            type={showPassword1 ? 'text' : 'password'}
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            className='w-[300px] sm:w-[360px] p-2 border border-gray-300 rounded'
                            onChange={onChangeField}
                            value={formFields.confirmPassword}
                        />
                        <button type="button" className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500' onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className='flex flex-col mt-5 mb-4 w-full items-center'>
                            <button type="button" className="relative inline-flex items-center justify-center bg-white border-2 border-[#14415A] p-2 px-[130px] mb-2 me-2 overflow-hidden text-l font-medium text-[#14415A] rounded-lg group focus:ring-4 focus:outline-none hover:bg-[#14415A] hover:text-white"
                            onClick={signUp}>
                            Sign Up
                        </button>
                    </div>

                    <p className='text-center text-[#14415A] font-thin'>Already have an account?
                        <b> <Link to="/signIn" className="no-underline hover:underline">Sign In</Link></b>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
