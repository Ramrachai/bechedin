'use client';
import React, { useState } from 'react';
import logo from '@/assets/images/logo2.png';
import userPic from '@/assets/images/user.jpg';
import styles from './menubar.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiMenuBurger } from 'react-icons/ci';
import { Button } from '../ui/button';

export default function MainMenu() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  return <>{isDashboard ? null : <Menubar />}</>;
}

export function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

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
            <Link href={item.link} key={index} className={styles.menuItem}>
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
              <Image src={userPic} alt='user photo' width={35} height={35} />
              <span>Ramrachai</span>
            </Link>
          ) : (
            <Link href={'/login'}>Login</Link>
          )}
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className={styles.menuItem}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {isLoggedIn ? (
              <Link href={'/dashboard'} title='profile' className={styles.user}>
                <Image src={userPic} alt='user photo' width={35} height={35} />
                <span>Ramrachai</span>
              </Link>
            ) : (
              <Link href={'/login'}>Login</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
