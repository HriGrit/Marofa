import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import './style.css';

import { Box, TextField, InputAdornment, IconButton, Button, Backdrop, CircularProgress } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

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
            const userCredential = await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
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
            <div class="mt-[60px] mb-[60px] border-4 pb-6 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="flex items-center justify-center space-x-2 pb-0">
                    <img src={logo} class="h-10 sm:h-16" alt="MAROFA Logo" />
                    <span class="self-center text-xl font-semibold text-[#14415A] sm:text-3xl">MAROFA</span>
                </div>
                <hr class=" my-2 border-[#14415A] border-[1px] rounded sm:mx-auto lg:my-2 " />
                <div class="text-center mb-2 pt-4">
                    <span class="text-l text-align:center font-thin text-[#14415A] sm:text-m">Sign up</span>
                </div>

                <Backdrop
                    sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={showLoader}
                    className="formLoader"
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <form class='flex flex-col items-center p-0'>
                    <div class='form-group mt-5 mb-4 w-100 signInOr'>
                        <Button type="button" class=" alignitems-center bg-white hover:bg-[#e6e6e6] focus:ring-1 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center me-2 mb-2"
                            onClick={signInWithGoogle}><img src={GoogleImg} />
                            <p class="text-[#14415a]">Sign Up with Google</p> </Button>
                        <div class="flex items-center justify-center w-full">
                            <hr class="w-64 h-px my-8 bg-[#14415A] border-0" />
                            <span class="absolute px-3 font-thin text-[#14415A] -translate-x-1/2 bg-white left-1/2">or sign up with E-mail</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4'>
                        <TextField id="email" type="email" name='email' label="Email" className='w-[300px] sm:w-[360px]'
                            onChange={onChangeField} value={formFields.email}
                        />
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4'>
                        <TextField
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            label="Password"
                            className='w-[300px] sm:w-[360px]'
                            onChange={onChangeField}
                            value={formFields.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className='flex flex-col items-center mt-2 mb-4'>
                        <TextField
                            id="confirmPassword"
                            type={showPassword1 ? 'text' : 'password'}
                            name='confirmPassword'
                            label="Confirm Password"
                            className='w-[300px] sm:w-[360px]'
                            onChange={onChangeField}
                            value={formFields.confirmPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword1(!showPassword1)}
                                            edge="end"
                                        >
                                            {showPassword1 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className='flex flex-col mt-5 mb-4 w-full items-center'>
                        <Button class="relative inline-flex items-center justify-center border-2 border-[#14415A] p-2 px-[130px] mb-2 me-2 overflow-hidden text-l font-medium text-[#14415A] rounded-lg group bg-[#14415A] focus:ring-4 focus:outline-none focus:ring-bg-[#14415A] hover:bg-[#14415A] hover:text-white"
                            onClick={signUp}>
                            Sign Up
                        </Button>
                    </div>

                    <p className='text-center text-[#14415A] text-thin'>Already have an account?
                        <b> <Link to="/signIn" class="no-underline hover:underline">Sign In</Link>
                        </b>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;