import React from 'react';
import styles from './FilterPills.module.css';

function FilterPills({ tags, activeTag, onSelect }) {
  return (
    <div className={styles.wrap} role="group" aria-label="Filter by category">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.pill} ${activeTag === tag ? styles.active : ''}`}
          onClick={() => onSelect(tag)}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default FilterPills;
