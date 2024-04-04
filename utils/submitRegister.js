import { SERVER_URL } from '@/lib/enums';
import axios from 'axios';

const submitRegisterForm = async (formData) => {
  try {
    const api_url = SERVER_URL + '/api/auth/register';
    console.log('api url ==', api_url);

    const response = await axios.post(api_url, formData, {
      withCredentials: true,
    });
    if (response.data.success === true) {
      console.log('user created  successfully');
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to register user, please try again');
  }
};

export default submitRegisterForm;
