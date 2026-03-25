import React from 'react';
import styles from './SkeletonCard.module.css';

function SkeletonCard() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={`${styles.img} skeleton`} />
      <div className={styles.body}>
        <div className={`${styles.line} ${styles.w90} skeleton`} />
        <div className={`${styles.line} ${styles.w70} skeleton`} />
        <div className={styles.footer}>
          <div className={`${styles.price} skeleton`} />
          <div className={`${styles.btn} skeleton`} />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
