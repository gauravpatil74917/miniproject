import React from 'react';
import styles from '../../css/Dashboard/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/fcd58e77456bbe3a953bce2dd86d2039.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>CricAuction</h1>
        <div className={styles.avatar} />
      </div>
    </header>
  );
}
