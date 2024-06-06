import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import GoogleImg from '../../assets/google.png';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../utils/firebase';
import logo from "../../assets/marofa-whitebg.svg";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formFields, setFormFields] = useState({ email: '', password: '' });
    const history = useNavigate();

    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
    };

    const signIn = () => {
        setShowLoader(true);
        signInWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
                setShowLoader(false);
                setFormFields({ email: '', password: '' });
                toast.success("Sign-in successful!");
                localStorage.setItem('isLogin', true);
                history('/');
            })
            .catch((error) => {
                toast.error("An error occurred while signing in.");
            });
    };

    const signInWithGoogle = () => {
        setShowLoader(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setShowLoader(false);
                localStorage.setItem('isLogin', true);
                toast.success("Sign-in with Google successful!");
                history('/');
            })
            .catch((error) => {
                toast.error("An error occurred while signing in with Google.");
            });
    };

    return (
        <div>
            <section>
                <Toaster />
                <div className="mt-[60px] mb-[60px] border-4 pb-6 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="flex items-center justify-center space-x-2 pb-0">
                        <img src={logo} className="h-10 sm:h-16" alt="MAROFA Logo" />
                        <span className="self-center text-xl font-semibold text-[#14415A] sm:text-3xl">MAROFA</span>
                    </div>
                    <hr className="my-2 border-[#14415A] border-[1px] rounded sm:mx-auto lg:my-2" />
                    <div className="text-center mb-2 pt-4">
                        <span className="text-l font-thin text-[#14415A] sm:text-m">Sign In</span>
                    </div>
                    <form className='flex flex-col items-center p-0'>
                        <div className='form-group mt-5 mb-4 w-100 signInOr'>
                            <button type="button" className="alignitems-center bg-white hover:bg-[#e6e6e6] focus:ring-1 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center me-2 mb-2 space-x-2"
                                onClick={signInWithGoogle}>
                                <img src={GoogleImg} className='w-10 h-10' alt="Google" />
                                <p className="text-[#14415a]">Sign In with Google</p>
                            </button>
                            <div className="flex items-center justify-center w-full">
                                <hr className="w-64 h-px my-8 bg-[#14415A] border-0" />
                                <span className="absolute px-3 font-thin text-[#14415A] -translate-x-1/2 bg-white left-1/2">or sign in with E-mail</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-2 mb-4'>
                            <input
                                id="email"
                                type="email"
                                name='email'
                                placeholder="Email"
                                className='w-[300px] sm:w-[360px] p-2 border border-gray-300 rounded'
                                onChange={onChangeField}
                                value={formFields.email}
                            />
                        </div>
                        <div className='flex flex-col items-center mt-2 mb-4'>
                            <div className='relative w-[300px] sm:w-[360px]'>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder="Password"
                                    className='w-full p-2 border border-gray-300 rounded'
                                    onChange={onChangeField}
                                    value={formFields.password}
                                />
                                <button type="button" className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col mt-5 mb-4 w-full items-center'>
                            <button type="button" className="relative inline-flex items-center justify-center bg-white border-2 border-[#14415A] p-2 px-[130px] mb-2 me-2 overflow-hidden text-l font-medium text-[#14415A] rounded-lg group focus:ring-4 focus:outline-none hover:bg-[#14415A] hover:text-white"
                                onClick={signIn}>
                                Sign In
                            </button>
                        </div>
                        <p className='text-center text-[#14415A] font-thin'>Don't have an account?
                            <b> <Link to="/signUp" className="no-underline hover:underline">Sign Up</Link></b>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
