import axios from 'axios';
// import { SERVER_URL } from '../lib/enums';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const LoginApiRequest = async (formData) => {
    let { email, password } = formData;
    let response = await axios.post(
        SERVER_URL + '/api/auth/login',
        { email, password },
        { withCredentials: true }
    );
    return response.data;
};

export const RegisterApiRequest = async (formData) => {
    let { name, email, phone, password } = formData;
    let response = await axios.post(
        SERVER_URL + '/api/auth/register',
        { name, email, phone, password },
        { withCredentials: true }
    );
    return response.data;
};

export const SendOTPApiRequest = async (otp) => {
    let response = await axios.post(
        SERVER_URL + '/api/auth/verify-otp',
        { otp },
        { withCredentials: true }
    );
    return response.data;
};

export const ResendOTPApiRequest = async () => {
    let response = await axios.get(SERVER_URL + '/api/auth/resend-otp', {
        withCredentials: true,
    });
    return response.data;
};
