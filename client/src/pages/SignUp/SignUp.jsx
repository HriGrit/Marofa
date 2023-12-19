import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './style.css';

import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { useState } from 'react';
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../utils/firebase';
import logo from "../../assets/marofa-whitebg.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import GoogleImg from '../../assets/google.png';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const [showLoader, setShowLoader] = useState(false);


    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const signUp = () => {
        setShowLoader(true);
        createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setShowLoader(false);
                setFormFields({
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };


    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormFields(() => ({
            ...formFields,
            [name]: value,
        }));

    };
    const signInWithGoogle = () => {
        setShowLoader(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                setShowLoader(false);


                localStorage.setItem('isLogin', true);
                // context.signIn();

                history('/');

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <div>
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
                        <Button class="relative inline-flex items-center justify-center bg-white border-2 border-[#14415A] p-2 px-[130px] mb-2 me-2 overflow-hidden text-l font-medium text-[#14415A] rounded-lg group bg-[#14415A] focus:ring-4 focus:outline-none focus:ring-bg-[#14415A] hover:bg-[#14415A] hover:text-white"
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