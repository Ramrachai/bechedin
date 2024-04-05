import React from 'react';
import styles from './dashboard.module.scss';
import { cards } from '@/lib/cardsData';
import Card from '@/components/dashboard/card/Card';
import Chart from '@/components/dashboard/chart/Chart';

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cards.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
                <Chart />
            </div>
        </div>
    );
};

export default Dashboard;
