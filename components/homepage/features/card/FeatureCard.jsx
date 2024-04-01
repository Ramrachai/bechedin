import React from 'react';
import styles from './featurecard.module.scss';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const FeatureCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__border}></div>
      <div className={styles.card_title__container}>
        <span className={styles.card_title}>{item.title}</span>
        <p className={styles.card_paragraph}>{item.description}</p>
      </div>
      <hr className={styles.line} />
      <ul className={styles.card__list}>
        {item.listItems.map((list, index) => (
          <li className={styles.card__list_item} key={index}>
            <span className={styles.check}>
              <FaCheck size={10} />
            </span>
            <span className={styles.list_text}>{list}</span>
          </li>
        ))}
      </ul>
      <Link href={item.btnLink} className={styles.button}>
        {item.btnText}
      </Link>
    </div>
  );
};

export default FeatureCard;
