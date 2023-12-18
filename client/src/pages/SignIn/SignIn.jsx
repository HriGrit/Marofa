import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../utils/firebase';

import GoogleImg from '../../assets/google.png';
import logo from "../../assets/marofa-whitebg.png";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const history = useNavigate();

    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormFields(() => ({
            ...formFields,
            [name]: value,
        }));

    };

    const signIn = () => {
        setShowLoader(true);
        signInWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setShowLoader(false);
                setFormFields({
                    email: '',
                    password: '',
                });
                localStorage.setItem('isLogin', true);
                history('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };

    const signInWithGoogle = () => {
        setShowLoader(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setShowLoader(false);
                localStorage.setItem('uid', user.uid);
                // context.signIn();
                history('/');

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (
        <div class="bg-red">
            <section>
                <div class="mt-[60px] mb-[60px] border-4 pb-6 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="flex items-center justify-center space-x-2 pb-0">
                        <img src={logo} class="h-10 sm:h-16" alt="MAROFA Logo" />
                        <span class="self-center text-xl font-semibold text-[#14415A] sm:text-3xl">MAROFA</span>
                    </div>
                    <hr class=" my-2 border-[#14415A] border-[1px] rounded sm:mx-auto lg:my-2 " />
                    <div class="text-center mb-2 pt-4">
                        <span class="text-l text-align:center font-thin text-[#14415A] sm:text-m">Sign In</span>
                    </div>
                    <form class='flex flex-col items-center p-0'>
                        <div class='form-group mt-5 mb-4 w-100 signInOr'>
                            <Button type="button" class=" alignitems-center bg-white hover:bg-[#e6e6e6] focus:ring-1 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center me-2 mb-2"
                                onClick={signInWithGoogle}><img src={GoogleImg} />
                                <p class="text-[#14415a]">Sign In with Google</p> </Button>
                            <div class="flex items-center justify-center w-full">
                                <hr class="w-64 h-px my-8 bg-[#14415A] border-0" />
                                <span class="absolute px-3 font-thin text-[#14415A] -translate-x-1/2 bg-white left-1/2">or sign in with E-mail</span>
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
                        <div className='flex flex-col mt-5 mb-4 w-full items-center'>
                            <Button class="relative inline-flex items-center justify-center border-2 border-[#14415A] p-2 px-[130px] mb-2 me-2 overflow-hidden text-l font-medium text-[#14415A] rounded-lg group bg-[#14415A] focus:ring-4 focus:outline-none focus:ring-bg-[#14415A] hover:bg-[#14415A] hover:text-white"
                                onClick={signIn}>
                                Sign In
                            </Button>
                        </div>

                        <p className='text-center text-[#14415A] text-thin'>Don't have an account?
                            <b> <Link to="/signUp" class="no-underline hover:underline">Sign Up</Link>
                            </b>
                        </p>
                    </form>
                </div >
            </section >
        </div>
    );
};

export default SignIn;;