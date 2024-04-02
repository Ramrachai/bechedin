'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './register.module.scss';
import { useRouter } from 'next/navigation';
import validateRegisterForm from '@/utils/registerValidation';
import submitRegisterForm from '@/utils/submitRegister';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [serverRes, setServerRes] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    const validationErrors = validateRegisterForm({
      name,
      phone,
      email,
      password,
      confirmPassword,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const serverData = await submitRegisterForm({
        name,
        phone,
        email,
        password,
      });
      setServerRes(serverData);
      event.target.reset();
      setErrors({});

      if (serverData.status === 'success') {
        router.push('/otp');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ message: error.message });
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
          {serverRes?.status && (
            <p
              className={`${
                serverRes?.status == 'failed' ? styles.error : styles.success
              } text-center mt-2`}>
              {serverRes.message}
            </p>
          )}

          <RegisterForm
            handleSubmit={handleSubmit}
            errors={errors}
            serverRes={serverRes}
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
