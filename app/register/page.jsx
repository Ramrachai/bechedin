'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './register.module.scss';
import { redirect, useRouter } from 'next/navigation';
const Register = () => {
  const [errors, setErrors] = useState({});
  const [serverRes, setServerRes] = useState(null);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    const validationErrors = {};

    if (!name || name.trim().length < 3) {
      validationErrors.name = '(min 3 characters)';
    }

    if (!phone || phone.trim().length !== 11 || isNaN(Number(phone.trim()))) {
      validationErrors.phone = '(minu 11 digits)';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = '(Invalid email)';
    }

    if (!password || password.length < 4) {
      validationErrors.password = '(min 4 characters)';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const api_url = 'http://localhost:5000/api/user/register';
    console.log(api_url);
    try {
      // If validation passes, submit the form data to the backend
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
        }),
      });
      console.log(
        'data sent client to server ==',
        name,
        email,
        phone,
        password
      );

      let serverData = await response.json();
      setServerRes(serverData);
      //reset form and state
      event.target.reset();
      setErrors({});

      if (response.ok) {
        router.push('/otp');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
      setErrors({ message: 'Failed to register user, please try again' });
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor='fullName'>
                Full Name{' '}
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </label>
              <input
                required
                type='text'
                name='name'
                id='fullName'
                placeholder='Enter your Full name'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='phone'>
                Phone Number{' '}
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                placeholder='Enter your phone number'
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='email'>
                Email{' '}
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your Email'
              />
            </div>

            <div className='flex gap-4'>
              <div className={styles.inputGroup}>
                <label htmlFor='password'>Password </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Your password'
                />
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor='confirmPassword'>Confirm Password </label>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Enter your password again'
                />
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword}</span>
                )}
              </div>
            </div>

            <button className={styles.registerBtn} type='submit'>
              Register
            </button>
          </form>

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
