'use client';
import React from 'react';
import styles from './login.module.scss';
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaPersonBooth,
  FaHeart,
  FaMotorcycle,
  FaTags,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import axios from 'axios';
import { SERVER_URL } from '@/lib/enums';
import useAuthStore from '@/zustand/useAuthStore';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { updateLoginStatus } = useAuthStore();
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    let formaData = new FormData(e.target);
    let email = formaData.get('email');
    let password = formaData.get('password');
    console.log('Hello login page!', email, password);

    let response = await axios.post(
      SERVER_URL + '/api/auth/login',
      { email, password },
      { withCredentials: true }
    );

    console.log(response.data);
    if (response.data.loggedIn == true) {
      updateLoginStatus(true);
      router.push('/dashboard');
    } else {
      updateLoginStatus(false);
      router.push('/login');
    }
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.textContainer}>
        <Image src={logo} height={100} width={100} alt='bike arot logo' />
        <h2>
          Welcome to <span>Bike Arot </span>{' '}
        </h2>
        <p>Sign in to manage your account and start selling bikes today!</p>
        <ul>
          <li>
            <FaMotorcycle size={25} />
            <span>You can post to sell bikes.</span>
          </li>
          <li>
            <FaHeart size={25} />
            <span>Can add to favourite bike list.</span>
          </li>
          <li>
            <FaTags size={25} />
            <span>Review your ads at your convenience and manage them.</span>
          </li>
        </ul>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter your email'
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
            />
            <div className={styles.forgot}>
              <Link
                href='#'
                className={styles.forgotPassword}
                rel='noopener noreferrer'>
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button className={styles.signIn} type='submit'>
            Sign in
          </button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line} />
          <p className={styles.message}>Login with social accounts</p>
          <div className={styles.line} />
        </div>

        <div className={styles.socialIcons}>
          <button className={styles.socialIcon}>
            <FaGoogle />
          </button>
          <button className={styles.socialIcon}>
            <FaFacebookF />
          </button>
          <button className={styles.socialIcon}>
            <FaGithub />
          </button>
        </div>

        <p className={styles.signup}>
          Don't have an account?
          <Link href='/register'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
