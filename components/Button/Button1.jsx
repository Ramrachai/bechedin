import React from 'react';
import styles from './button.module.scss';

const Button1 = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button1;
