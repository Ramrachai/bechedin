'use client';
import React from 'react';
import styles from './registerForm.module.scss';

const RegisterForm = ({ handleSubmit, errors, serverRes }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor='fullName'>
          Full Name{' '}
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <input
          required
          type='text'
          name='name'
          id='fullName'
          placeholder='Enter your Full name'
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>
          Phone Number{' '}
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </label>
        <input
          type='text'
          name='phone'
          id='phone'
          placeholder='Enter your phone number'
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor='email'>
          Email{' '}
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your Email'
        />
      </div>

      <div className='flex gap-4'>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Your password'
          />
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='confirmPassword'>Confirm Password </label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Enter your password again'
          />
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
      </div>

      <button className={styles.registerBtn} type='submit'>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
