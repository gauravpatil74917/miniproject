import React, { useState } from 'react';
import styles from '../../css/BidControl/BidControl.module.css';

export function BidControls() {
  const [points, setPoints] = useState(0);
  const [isSold, setIsSold] = useState(false);

  return (
    <div className={styles.bidControls}>
      <div className={styles.bidControlsHeader}>
        <h2 className={styles.bidControlsTitle}>BID CONTROLS</h2>
      </div>
      <div className={styles.bidControlsContent}>
        <div className={styles.bidSection}>
          <h3 className={styles.bidSectionTitle}>BIDDING TEAM</h3>
          <input type="text" className={styles.bidInput} placeholder="Team name" />
        </div>
        <div className={styles.bidSection}>
          <h3 className={styles.bidSectionTitle}>BIDDING POINTS</h3>
          <div className={styles.bidPoints}>
            <button 
              className={styles.bidButton} 
              onClick={() => setPoints(Math.max(0, points - 1))}
            >
              -
            </button>
            <div className={styles.bidPointsValue}>
              {points.toString().padStart(3, '0')}
            </div>
            <button 
              className={styles.bidButton} 
              onClick={() => setPoints(points + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.bidButtons}>
          <button 
            className={`${styles.bidButtonLarge} ${isSold ? styles.active : ''}`}
            onClick={() => setIsSold(true)}
          >
            SOLD
          </button>
          <button 
            className={`${styles.bidButtonSmall} ${!isSold ? styles.active : ''}`}
            onClick={() => setIsSold(false)}
          >
            UNSOLD
          </button>
        </div>
      </div>
    </div>
  );
}
