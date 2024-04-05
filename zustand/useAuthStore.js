import { SERVER_URL } from '@/lib/enums';
import axios from 'axios';
import { create } from 'zustand';
import jwt from 'jsonwebtoken';

const useAuthStore = create((set, get) => ({
    isVarified: false,
    isAdmin: false,
    isModerator: false,
    isUser: false,
    userData: {},

    isLoggedIn: () => {
        let token = localStorage.getItem('token');
        let { loggedIn, active } = jwt.decode(token);
        if (active && loggedIn) {
            return true;
        } else {
            false;
        }
    },
    checkLogInStatus: async () => {
        const response = await axios.get(SERVER_URL + '/api/auth/logInStatus', {
            withCredentials: true,
        });
        const status = await response.data;
        return status;
    },

    updateUserData: (obj) => {
        set({ userData: obj });
    },
    updateLoginStatus: (status) => set({ isLoggedIn: status }),
}));

export default useAuthStore;
