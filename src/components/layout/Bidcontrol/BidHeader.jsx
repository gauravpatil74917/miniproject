import React from 'react';
import { Link } from 'react-router-dom';  // Replacing next/link with react-router-dom's Link
import { ModeToggle } from './ModeToggle';
import styles from '../../css/BidControl/BidHeader.module.css';

export function BidHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLeft}>
          <Link to="/" className={styles.logo}> 
          </Link>
          <nav className={styles.nav} aria-label="Primary Navigation">
            <Link to="#" className={styles.link}>Back</Link> 
            <Link to="#" className={styles.link}>Edit</Link> 
            <Link to="#" className={styles.link}>Next Player</Link> 
          </nav>
        </div>
        <div className={styles.headerRight}>
          <ModeToggle />
          <nav className={styles.nav} aria-label="Secondary Navigation">
            <Link to="/home" className={styles.link}>Home</Link> 
            <Link to="/summary" className={styles.link}>Summary</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
