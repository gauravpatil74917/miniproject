import React from 'react';
import styles from '../../css/Dashboard/StatsCard.module.css';

const StatsCard = ({ stats = [] }) => {
  const defaultStats = [
    { title: "Base Points", value: "000" },
    { title: "Total Players", value: "000" },
    { title: "Total Teams", value: "000" },
    { title: "Matches Played", value: "000" },
    { title: "Average Score", value: "000" },
    { title: "Highest Score", value: "000" },
    { title: "Lowest Score", value: "000" },
    { title: "Total Runs", value: "000" },
    { title: "Total Wickets", value: "000" },
    { title: "Best Bowling", value: "0/00" },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className={styles.statsContainer}>
      <h2 className={styles.statsTitle}>Tournament Details</h2>
      <div className={styles.statsScrollContainer}>
        {displayStats.map(({ title, value }, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.statTitle}>{title}</h3>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
