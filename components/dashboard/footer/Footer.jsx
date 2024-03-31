import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bike Arot</div>
      <div className={styles.text}>
        © All rights reserved | {new Date().getFullYear()}
      </div>
      <p>
        Made with 😍 by
        <Link href={'https://ramrachai.com'}> Ramrachai</Link>
      </p>
    </div>
  );
};

export default Footer;
