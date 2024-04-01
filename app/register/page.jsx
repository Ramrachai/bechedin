import Link from 'next/link';
import React from 'react';
import styles from './register.module.scss';

const Register = async () => {
  async function handleSubmit(formData) {
    'use server';
    let name = formData.get('name');
    const email = formData.get('email');
    let phone = formData.get('phone');
    let password = formData.get('password');

    const res = await fetch(process.env.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, password }),
    });
    const data = await res.json();
    console.log('my data ==', data);
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Register</h1>
        <p className={styles.subTitle}>
          Sign up now and get full access to Bike Arot
        </p>
        <form className={styles.form} action={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              name='name'
              id='fullName'
              placeholder='Enter your Full name'
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='phone'>
              Phone Number <span>(otp will be sent for verification)</span>
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='Enter your phone number'
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your Email'
            />
          </div>
          {/* 
          <div className={styles.inputGroup}>
            <label htmlFor='address'>Address</label>
            <input
              type='address'
              name='address'
              id='address'
              placeholder='Enter your full address'
            />
          </div> */}

          <div className='flex gap-4'>
            <div className={styles.inputGroup}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Your password'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Enter your password again'
              />
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
  );
};

export default Register;
