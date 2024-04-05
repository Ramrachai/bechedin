'use client';
import useAuthStore from '@/zustand/useAuthStore';
import React from 'react';

const UserData = () => {
    const { userData } = useAuthStore();
    console.log('dashboard user data=', userData);

    return <div>userdata</div>;
};

export default UserData;
