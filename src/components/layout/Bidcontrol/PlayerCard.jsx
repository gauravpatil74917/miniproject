import React from 'react';
import styles from '../../css/BidControl/PlayerCard.module.css';

export function PlayerCard({ name, age, proficiency, imageUrl }) {
  return (
    <div className={styles.playerCard}>
      <div className={styles.playerInfo}>
        <div className={styles.playerImage}>
          {/* Replacing next/image with regular img tag */}
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`player image`}
            className={styles.image} 
            width={200}  
            height={200}
          />
        </div>
        <div className={styles.playerDetails}>
          <h2 className={styles.playerName}>{name}</h2>
          <p className={styles.playerAge}>Age: {age}</p>
          {proficiency && (
            <p className={styles.playerProficiency}>Proficiency: {proficiency}</p>
          )}
        </div>
      </div>
    </div>
  );
}
