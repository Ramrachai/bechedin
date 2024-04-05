'use client';
import useAuthStore from '@/zustand/useAuthStore';
import React, { useEffect } from 'react';
import Logout from '@/components/logout/Logout';
import jwt from 'jsonwebtoken';
import toast from 'react-hot-toast';

export const LogInStatus = () => {
    const { isLoggedIn, updateLogInStatus, userData, getUserData } =
        useAuthStore();

    let token = localStorage.getItem('token');
    let decoded = jwt.decode(token);

    console.log(decoded.loggedIn, decoded.isVerified);

    const handleToast = () => {
        console.log('toast');
        toast.success("You're logged in!");
    };

    useEffect(() => {}, []);

    return (
        <div className='flex gap-3 mb-52 items-center'>
            <button
                onClick={() => updateLogInStatus()}
                className='border bg-gray-300 p-3'>
                {' '}
                Is Logged In ?{' '}
            </button>
            <button onClick={handleToast} className='border bg-purple-300 p-3'>
                Check Toast
            </button>
            <Logout className='border bg-red-300 p-3'>Logout</Logout>
            <p>
                status:{' '}
                {isLoggedIn ? (
                    <span className='text-green-400'>Yes Logged in</span>
                ) : (
                    <span className='text-red-400'>Please Log In</span>
                )}{' '}
            </p>
        </div>
    );
};
