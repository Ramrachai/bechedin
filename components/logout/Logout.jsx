'use client';
import { SERVER_URL } from '@/lib/enums';
import useAuthStore from '@/zustand/useAuthStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Logout = ({ className, children, ...props }) => {
    const { updateUserData, updateLoginStatus } = useAuthStore();
    const router = useRouter();
    const handleClick = async () => {
        let res = await axios.get(SERVER_URL + '/api/auth/logout', {
            withCredentials: true,
        });
        let { message, logOut } = await res.data;
        if (logOut === true) {
            localStorage.removeItem('token');
            updateLoginStatus(false);
            updateUserData({});
            toast.success(message);
            router.push('/');
        }
    };

    return (
        <button onClick={handleClick} className={className} {...props}>
            {children}
        </button>
    );
};

export default Logout;
