const validateRegisterForm = (formData) => {
  const { name, phone, email, password, confirmPassword } = formData;
  const errors = {};

  if (!name || name.trim().length < 3) {
    errors.name = 'Required! min 3 characters';
  }

  if (!phone || phone.trim().length !== 11 || isNaN(Number(phone.trim()))) {
    errors.phone = 'Required! 11 digits';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email';
  }

  if (!password || password.length < 4) {
    errors.password = 'Required! min 4 characters';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export default validateRegisterForm;
