'use client';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.scss';
import { useState } from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  const [hide, setHide] = useState(true);
  const handleSearch = () => {
    setHide(!hide);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <button onClick={handleSearch}>
            <MdSearch />
          </button>
          <input
            type='text'
            placeholder='Search...'
            className={`${styles.input} ${hide ? styles.hide : ''} `}
          />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />

          <Link href={'/'} title='Goto Home page'>
            <MdPublic size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
