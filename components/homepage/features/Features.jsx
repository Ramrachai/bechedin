import React from 'react';
import styles from './features.module.scss';
import { FaRibbon } from 'react-icons/fa';
import FeatureCard from './card/FeatureCard';
import GradientText from '@/components/gradientText/GradientText';
import featureCardData from '@/lib/featureCardData.json';
const Features = () => {
  return (
    <div className={styles.features}>
      <GradientText
        className={
          'font-beyond text-3xl sm:text-5xl tracking-wider text-center block m-4 sm:m-8'
        }>
        Discover More, Ride Further
      </GradientText>
      <p className={styles.description}>
        Explore an extensive inventory of motorbikes, connect with fellow
        enthusiasts, and embark on unforgettable journeys with{' '}
        <GradientText className={'font-bold'}>Bike Arot</GradientText>.
      </p>
      <div className={styles.cardContainer}>
        {featureCardData.map((item, index) => {
          return <FeatureCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

const cardData = [
  {
    icon: <FaRibbon />,
    title: 'buy',
    subtitle: 'Find and Buy your dream bike at lowest possible price',
  },
];

export default Features;
