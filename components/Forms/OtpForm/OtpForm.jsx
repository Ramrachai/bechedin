import React from 'react';
import OTPInput from 'react-otp-input';
import styles from './otpform.module.scss';

const OtpForm = ({ otp, setOTP, handleVerifyOTP, handleResendOTP }) => {
    return (
        <div className={styles.container}>
            <span className={styles.mainHeading}>Enter OTP</span>
            <p className={styles.otpSubheading}>
                We have sent a verification code to your Email
            </p>
            <OTPInput
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
                <button onClick={handleResendOTP}>Resend OTP</button>
            </p>
        </div>
    );
};

export default OtpForm;
