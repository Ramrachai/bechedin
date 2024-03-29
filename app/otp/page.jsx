import React from 'react';
import styles from './otp.module.scss';
import Button1 from '@/components/Button/Button1';
import Link from 'next/link';

const Otp = () => {
  return (
    <div className={styles.pageContainer}>
      <form className={styles.otpForm}>
        <span className={styles.mainHeading}>Enter OTP</span>
        <p className={styles.otpSubheading}>
          We have sent a verification code to your mobile number
        </p>
        <div className={styles.inputContainer}>
          <input
            required
            maxLength='1'
            type='text'
            className={styles.otpInput}
            id='otp-input1'
          />
          <input
            required
            maxLength='1'
            type='text'
            className={styles.otpInput}
            id='otp-input2'
          />
          <input
            required
            maxLength='1'
            type='text'
            className={styles.otpInput}
            id='otp-input3'
          />
          <input
            required
            maxLength='1'
            type='text'
            className={styles.otpInput}
            id='otp-input4'
          />
        </div>
        <Button1 type='submit'>Verify</Button1>
        <Link className={styles.exitBtn} href={'/login'}>
          ×
        </Link>
        <p className={styles.resendNote}>
          Didn't receive the code?{' '}
          <button className={styles.resendBtn}>Resend Code</button>
        </p>
      </form>
    </div>
  );
};

export default Otp;
