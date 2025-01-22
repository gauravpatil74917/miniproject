import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from '../../css/BidControl/ModeToggle.module.css';

export function ModeToggle() {
  // Check the current theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update the theme in localStorage and the state
  useEffect(() => {
    document.body.className = theme; // Set the class on the body for theme-based styling
    localStorage.setItem('theme', theme); // Store the theme in localStorage
  }, [theme]);

  return (
    <button
      className={styles.modeToggle}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Sun className={styles.icon} aria-hidden="true" />
      ) : (
        <Moon className={styles.icon} aria-hidden="true" />
      )}
    </button>
  );
}
