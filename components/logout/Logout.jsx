'use client';

import { SERVER_URL } from '@/lib/enums';
import axios from 'axios';
import React from 'react';
const Logout = ({ className, children, ...props }) => {
  const handleClick = async () => {
    let res = await axios.get(SERVER_URL + '/api/auth/logout', {
      withCredentials: true,
    });
    let { message, logOut } = await res.data;
    console.log(message, logOut);
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
};

export default Logout;
