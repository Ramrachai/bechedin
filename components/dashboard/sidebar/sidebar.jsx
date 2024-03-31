import React from 'react';
import styles from './sidebar.module.scss';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import MenuLink from './menuLink/menuLink';

const Sidebar = () => {
  const menuItems = [
    {
      title: 'General',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          icon: <MdDashboard />,
        },
        {
          title: 'Users',
          path: '/dashboard/users',
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: 'Products',
          path: '/dashboard/products',
          icon: <MdShoppingBag />,
        },
        {
          title: 'Bids',
          path: '/dashboard/bids',
          icon: <MdAttachMoney />,
        },
      ],
    },
    // {
    //   title: 'Analytics',
    //   list: [
    //     {
    //       title: 'Revenue',
    //       path: '/dashboard/revenue',
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: 'Reports',
    //       path: '/dashboard/reports',
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: 'Teams',
    //       path: '/dashboard/teams',
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
    {
      title: 'User',
      list: [
        {
          title: 'Settings',
          path: '/dashboard/settings',
          icon: <MdOutlineSettings />,
        },
        {
          title: 'Help',
          path: '/dashboard/help',
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src='/astronaut.png'
          alt='no avatar'
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{'John'}</span>
          <span className={styles.userTitle}>{'Admin'}</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={styles.cat}>{item.title}</span>
            {item.list.map((links) => (
              <MenuLink item={links} key={links.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
