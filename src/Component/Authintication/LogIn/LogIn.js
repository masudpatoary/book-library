import React, { useState } from 'react';
import './LogIn.local.css'
import auth from '../../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const LogIn = () => {
    const [user1, loading1, error1] = useAuthState(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (loading || loading1) {
        return (<p>Loading</p>)
    }
    if (error || error1) {
        <p>{error?.message || error1?.message}</p>
    }
    if (user1 || user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-100 ">
                <div class=" sm:p-0 sm:m-0 md:p-5">
                    <div class="card login-card shadow-2xl bg-base-100 ">
                        <div class="card-body sm:full">
                            <div className='w-full'>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    class="btn btn-outline w-full">Login With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;