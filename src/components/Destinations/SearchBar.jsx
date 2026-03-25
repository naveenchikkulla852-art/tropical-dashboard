import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ value, onChange, resultCount, loading }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inputWrap}>
  
        <svg
          className={styles.icon}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          className={styles.input}
          type="search"
          placeholder="Search by destination name or location…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search destinations"
        />

      
        {value && (
          <button
            className={styles.clear}
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {!loading && (
        <p className={styles.info} aria-live="polite">
          {resultCount} destination{resultCount !== 1 ? 's' : ''} found
        </p>
      )}
    </div>
  );
}

export default SearchBar;
