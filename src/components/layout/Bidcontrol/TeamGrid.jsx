import React from 'react';
import styles from '../../css/BidControl/TeamGrid.module.css';

const TEAMS = Array(12).fill("Team Name");

export function TeamGrid() {
  return (
    <div className={styles.teamGrid}>
      {TEAMS.map((team, index) => (
        <button 
          key={index} 
          className={styles.teamButton} 
          aria-label={`Select ${team}`}
        >
          <span className={styles.teamName}>{team}</span>
        </button>
      ))}
    </div>
  );
}
