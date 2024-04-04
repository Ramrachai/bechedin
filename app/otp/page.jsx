'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '@/lib/enums';
import styles from './otp.module.scss';
import OtpInput from 'react-otp-input';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/zustand/useAuthStore';

const OTPComponent = () => {
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0);
  const api_url = SERVER_URL + '/api/auth/verify-otp';
  const { isLoggedIn, updateLoginStatus } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearTimeout(interval);
  }, [timer]);

  const handleVerifyOTP = async () => {
    try {
      const api_url = SERVER_URL + '/api/auth/verify-otp';
      const response = await axios.post(
        api_url,
        { otp },
        { withCredentials: true }
      );
      setMessage(response.data.message);
      if (response.data.verified == true) {
        console.log('otp verified successfully');
        updateLoginStatus(true);
        router.push('/dashboard');
      } else {
        console.log('otp verification fail');
        updateLoginStatus(false);
        router.push('/register');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      setMessage('Internal server error');
    }
  };

  const handleResendOTP = async () => {
    try {
      const api_url = SERVER_URL + '/api/auth/resend-otp';
      const response = await axios.post(api_url, {}, { withCredentials: true });
      setMessage(response.data.message);
      setTimer(30); // Reset the timer to 30 seconds
    } catch (error) {
      console.error('Resend OTP error:', error);
      setMessage('Internal server error');
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.mainHeading}>Enter OTP</span>
      <p className={styles.otpSubheading}>
        We have sent a verification code to your Email
      </p>
      <OtpInput
        value={otp}
        onChange={setOTP}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <button onClick={handleVerifyOTP} className={styles.verifyBtn}>
        Verify OTP
      </button>
      <p className={styles.resendText}>
        Didn't Received your OTP ?{' '}
        <button onClick={handleResendOTP} disabled={timer > 0}>
          Resend OTP {timer > 0 && `(${timer})`}
        </button>
      </p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPComponent;
