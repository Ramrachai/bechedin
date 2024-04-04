'use client';
import useAuthStore from '@/zustand/useAuthStore';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useJwt } from 'react-jwt';
import { useCookies } from 'react-cookie';
import Logout from '@/components/logout/Logout';
import jwt from 'jsonwebtoken';

export const LogInStatus = () => {
  const { isLoggedIn, updateLogInStatus, userData, getUserData } =
    useAuthStore();

  let cookieValue = Cookies.get('token');
  let SECRET =
    '616a6d1d11e9d8e926301f9d907f46d489f1901949986f0894197b8e3f8d3f60';
  console.log(cookieValue, typeof cookieValue);

  const { token } = JSON.parse(cookieValue);
  console.log(token);

  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        console.error('Token verification failed:', err);
      } else {
        console.log('Decoded token:', decoded);
      }
    });
  } else {
    console.log('Token not found in cookie');
  }

  useEffect(() => {
    // isLoggedIn();
  }, []);

  return (
    <div className='flex gap-3 mb-52 items-center'>
      <button
        onClick={() => updateLogInStatus()}
        className='border bg-gray-300 p-3'>
        {' '}
        Is Logged In ?{' '}
      </button>
      <Logout className='border bg-red-300 p-3'>Logout</Logout>
      <p>
        status:{' '}
        {isLoggedIn ? (
          <span className='text-green-400'>Yes Logged in</span>
        ) : (
          <span className='text-red-400'>Please Log In</span>
        )}{' '}
      </p>
    </div>
  );
};
