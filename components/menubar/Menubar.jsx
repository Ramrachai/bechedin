'use client';
import React, { useState } from 'react';
import logo from '@/assets/images/logo2.png';
import userPic from '@/assets/images/user.jpg';
import styles from './menubar.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '../ui/button';
import useAuthStore from '@/zustand/useAuthStore';

export default function MainMenu() {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');
    return <>{isDashboard ? null : <Menubar />}</>;
}

export function Menubar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomepage = pathname === '/';
    const { isLoggedIn } = useAuthStore();
    // console.log('is login status==', isLoggedIn);
    const menuItems = [
        {
            title: 'All Bikes',
            link: '/allbike',
        },

        {
            title: 'Sell bike',
            link: '/sellbike',
        },
        {
            title: 'Bike Adda',
            link: '/bikeadda',
        },
    ];

    return (
        <div className={`${styles.wrapper} ${!isHomepage && styles.dark}`}>
            <div className={styles.container}>
                <Link href={'/'} className={styles.logo}>
                    <Image src={logo} alt='bike arot logo' width={100} />
                </Link>
                <ul className={styles.links}>
                    {menuItems.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className={styles.menuItem}>
                            {item.title}
                        </Link>
                    ))}
                </ul>

                <div className={styles.buttons}>
                    <Button
                        size='icon'
                        className='sm:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <GiHamburgerMenu />
                    </Button>

                    {isLoggedIn ? (
                        <Link
                            href={'/dashboard'}
                            title='profile'
                            className={styles.userProfile}>
                            <Image
                                src={userPic}
                                alt='user photo'
                                width={35}
                                height={35}
                            />
                            <span>Ramrachai</span>
                        </Link>
                    ) : (
                        <div className='flex items-center gap-3'>
                            <Link
                                href={'/register'}
                                className='hidden items-center sm:flex border px-3 py-2 rounded hover:bg-[#ffffff21]'>
                                <FaUserPlus size={20} className='inline mr-2' />
                                Register
                            </Link>

                            <Link
                                href={'/login'}
                                className='hidden items-center sm:flex border px-3 py-2 rounded  bg-gray-100 text-gray-800  hover:bg-gray-300'>
                                <FaSignInAlt
                                    size={20}
                                    className='inline mr-2'
                                />
                                Login
                            </Link>
                        </div>
                    )}
                </div>

                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className={styles.menuItem}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {isLoggedIn ? (
                            <Link
                                href={'/dashboard'}
                                title='profile'
                                className={styles.user}>
                                <Image
                                    src={userPic}
                                    alt='user photo'
                                    width={35}
                                    height={35}
                                />
                                <span>Ramrachai</span>
                            </Link>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Link
                                    href={'/register'}
                                    className='flex items-center sm:hidden border px-2 py-1 text-sm rounded  hover:bg-[#ffffff21]'>
                                    <FaUserPlus
                                        size={20}
                                        className='inline mr-2'
                                    />
                                    Register
                                </Link>

                                <Link
                                    href={'/login'}
                                    className='flex items-center sm:hidden border bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded  hover:bg-gray-300'>
                                    <FaSignInAlt
                                        size={20}
                                        className='inline mr-2'
                                    />
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
