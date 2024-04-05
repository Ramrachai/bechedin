'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './register.module.scss';
import { useRouter } from 'next/navigation';
import validateRegisterForm from '@/utils/registerValidation';
import RegisterForm from '@/components/Forms/RegisterForm/RegisterForm';
import { RegisterApiRequest } from '@/utils/apiRequest';
import toast from 'react-hot-toast';

const Register = () => {
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateRegisterForm(formData); //for input validation
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const serverResponse = await RegisterApiRequest(formData); //send data to server
        if (serverResponse.success === true) {
            setFormData({});
            setErrors({});
            toast.success(serverResponse.message + ' .OTP sent to email');
            router.push('/otp');
        } else {
            toast.error(serverResponse.message);
        }
    };

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Register</h1>
                    <p className={styles.subTitle}>
                        Sign up now and get full access to Bike Arot
                    </p>
                    <RegisterForm
                        handleSubmit={handleSubmit}
                        errors={errors}
                        handleChange={handleChange}
                    />
                    <p className={styles.signin}>
                        Already have an account?
                        <Link href='/login'>Log in</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
