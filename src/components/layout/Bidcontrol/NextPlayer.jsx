import React from 'react';
import styles from '../../css/BidControl/NextPlayer.module.css';

export function NextPlayer({ name = "Player name", age = "00" }) {
  return (
    <div className={styles.nextPlayer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Next Player</h3>
      </div>
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.age}>Age: {age}</p>
      </div>
    </div>
  );
}
