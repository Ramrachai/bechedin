'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/zustand/useAuthStore';
import OtpForm from '@/components/Forms/OtpForm/OtpForm';
import { ResendOTPApiRequest, SendOTPApiRequest } from '@/utils/apiRequest';
import jwt from 'jsonwebtoken';
import toast from 'react-hot-toast';

const OTPComponent = () => {
    const [otp, setOTP] = useState('');
    const { isLoggedIn, updateLoginStatus, updateUserData } = useAuthStore();
    const router = useRouter();

    isLoggedIn && router.push('/');

    const handleVerifyOTP = async () => {
        const serverResponse = await SendOTPApiRequest(otp);
        const { token, isVerified, message } = serverResponse;
        const decodedData = jwt.decode(token);
        if (isVerified && decodedData.loggedIn) {
            toast.success(message);
            updateLoginStatus(true);
            updateUserData(decodedData);
            router.push('/dashboard');
        } else {
            toast.error(message);
            router.push('/register');
        }
    };

    const handleResendOTP = async () => {
        const serverResponse = await ResendOTPApiRequest();
        const { success, message } = serverResponse;
        success ? toast.success(message) : toast.error(message);
    };

    return (
        <OtpForm
            otp={otp}
            setOTP={setOTP}
            handleVerifyOTP={handleVerifyOTP}
            handleResendOTP={handleResendOTP}
        />
    );
};

export default OTPComponent;
