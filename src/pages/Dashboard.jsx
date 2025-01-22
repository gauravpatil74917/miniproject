import React from 'react';
import Header from '../components/layout/Dashboard/Header';
import Sidebar from '../components/layout/Dashboard/Sidebar';
import StatsCard from '../components/layout/Dashboard/StatsCard';
import styles from '../components/css/Dashboard/Dashboard.module.css';

function Dashboard() {
  const tournamentStats = [
    { title: "Base Points", value: "100" },
    { title: "Total Players", value: "50" },
    { title: "Total Teams", value: "10" },
    { title: "Matches Played", value: "15" },
    { title: "Average Score", value: "150" },
    { title: "Highest Score", value: "220" },
    { title: "Lowest Score", value: "80" },
    { title: "Total Runs", value: "2250" },
    { title: "Total Wickets", value: "75" },
    { title: "Best Bowling", value: "5/20" },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <StatsCard stats={tournamentStats} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

