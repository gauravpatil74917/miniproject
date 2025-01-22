import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, User, Settings, Sliders } from 'lucide-react';
import styles from '../../css/Dashboard/Sidebar.module.css';

function Sidebar() {
  const location = useLocation();
  const navigation = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Teams', path: '/controls', icon: Users },
    { name: 'Players', path: '/players', icon: User },
    { name: 'Adjust Players', path: '/adjust-players', icon: Sliders },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className={styles.sidebar}>
      <nav className={styles.navContainer}>
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className={styles.profileContainer}>
        <Link to="/profile" className={styles.profileLink}>
          <img
            src="/b715ad1631c22160cf1ff3c21a2aa7d6.png"
            alt="Profile"
            className={styles.profileAvatar}
          />
          <span className={styles.profileName}>About player</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

