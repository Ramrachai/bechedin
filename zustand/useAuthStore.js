import { SERVER_URL } from '@/lib/enums';
import axios from 'axios';
import { create } from 'zustand';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const useAuthStore = create((set, get) => ({
  isVarified: false,
  isAdmin: false,
  isModerator: false,
  isUser: false,
  isLoggedIn: false,
  userData: null,

  updateLogInStatus: async () => {
    const response = await axios.get(SERVER_URL + '/api/auth/logInStatus', {
      withCredentials: true,
    });
    const status = response.data;
    set({ isLoggedIn: status });
    return status;
  },

  getUserData: () => {
    const token = Cookies.get('token');
    set({ userData: token });
  },
  updateLoginStatus: (status) => set({ isLoggedIn: status }),
}));

export default useAuthStore;
