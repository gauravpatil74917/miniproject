import React from 'react';

import { BidHeader } from '../components/layout/Bidcontrol/BidHeader';
import { BidControls } from '../components/layout/Bidcontrol/BidControls';
import { PlayerCard } from '../components/layout/Bidcontrol/PlayerCard';
import { TeamGrid } from '../components/layout/Bidcontrol/TeamGrid';
import { NextPlayer } from '../components/layout/Bidcontrol/NextPlayer';


import styles from '../components/css/BidControl/page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <BidHeader />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <BidControls />
            <NextPlayer />
          </div>
          <div className={styles.rightColumn}>
            <PlayerCard 
              name="Player name"
              age={25}
              proficiency="All-rounder"
              imageUrl="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
        <TeamGrid />
      </main>
    </div>
  );
}
