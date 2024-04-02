import { SERVER_URL } from '@/lib/enums';

const submitRegisterForm = async (formData) => {
  try {
    const api_url = SERVER_URL + '/api/user/register';
    console.log('api url ==', api_url);
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to register user, please try again');
  }
};

export default submitRegisterForm;
