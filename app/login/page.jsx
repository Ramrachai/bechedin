'use client';
import React, { useEffect, useState } from 'react';
import useAuthStore from '@/zustand/useAuthStore';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LoginApiRequest } from '@/utils/apiRequest';
import jwt from 'jsonwebtoken';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';

const LoginPage = () => {
    const { updateLoginStatus, userData, updateUserData, isLoggedIn } =
        useAuthStore();
    const [formData, setFormData] = useState({});
    const router = useRouter();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };
    async function handleSubmit(e) {
        e.preventDefault();
        let serverResponse = await LoginApiRequest(formData); //send to server , will return a token
        let token = serverResponse.token;
        let decodedData = jwt.decode(token);

        if ((decodedData.loggedIn == true) & (decodedData.isVerified == true)) {
            toast.success('Login Successful');
            localStorage.setItem('token', token);
            updateUserData(decodedData);
            updateLoginStatus(true);
            console.log(userData);
            router.push('/dashboard');
        } else {
            toast.error('Login Failed');
            updateLoginStatus(false);
            router.push('/login');
        }
    }

    if (isLoggedIn) {
        router.push('/');
    } else {
        return (
            <div className='flex items-center justify-center min-h-[100vh]'>
                <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        );
    }
};

export default LoginPage;
