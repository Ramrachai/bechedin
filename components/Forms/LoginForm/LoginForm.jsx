import Link from 'next/link';
import styles from './loginform.module.scss';
import logo from '@/assets/images/logo.png';
import {
    FaFacebookF,
    FaGithub,
    FaGoogle,
    FaHeart,
    FaMotorcycle,
    FaTags,
} from 'react-icons/fa';
import Image from 'next/image';

const LoginForm = ({ handleSubmit, handleChange }) => {
    return (
        <>
            <div className={styles.textContainer}>
                <Image
                    src={logo}
                    height={100}
                    width={100}
                    alt='bike arot logo'
                />
                <h2>
                    Welcome to <span>Bike Arot </span>{' '}
                </h2>
                <p>
                    Sign in to manage your account and start selling bikes
                    today!
                </p>
                <ul>
                    <li>
                        <FaMotorcycle size={25} />
                        <span>You can post to sell bikes.</span>
                    </li>
                    <li>
                        <FaHeart size={25} />
                        <span>Can add to favourite bike list.</span>
                    </li>
                    <li>
                        <FaTags size={25} />
                        <span>
                            Review your ads at your convenience and manage them.
                        </span>
                    </li>
                </ul>
            </div>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                        />
                        <div className={styles.forgot}>
                            <Link
                                href='#'
                                className={styles.forgotPassword}
                                rel='noopener noreferrer'>
                                Forgot Password ?
                            </Link>
                        </div>
                    </div>
                    <button className={styles.signIn} type='submit'>
                        Sign in
                    </button>
                </form>
                <div className={styles.socialMessage}>
                    <div className={styles.line} />
                    <p className={styles.message}>Login with social accounts</p>
                    <div className={styles.line} />
                </div>

                <div className={styles.socialIcons}>
                    <button className={styles.socialIcon}>
                        <FaGoogle />
                    </button>
                    <button className={styles.socialIcon}>
                        <FaFacebookF />
                    </button>
                    <button className={styles.socialIcon}>
                        <FaGithub />
                    </button>
                </div>

                <p className={styles.signup}>
                    Don't have an account?
                    <Link href='/register'>Sign up</Link>
                </p>
            </div>
        </>
    );
};

export default LoginForm;
