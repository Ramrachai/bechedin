export async function handleSubmit(formData) {
  'use server';
  let name = formData.get('name');
  let email = formData.get('email');
  let phone = formData.get('phone');
  let password = formData.get('password');
  const res = await fetch(process.env.BASE_URL + '/api/user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, password }),
  });
  let data = await res.json();
}
