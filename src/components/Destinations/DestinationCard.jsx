import React from 'react';
import { useToast } from '../../context/ToastContext';
import Stars from '../ui/Stars';
import styles from './DestinationCard.module.css';

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=60';

function DestinationCard({ destination, animationDelay = 0 }) {
  const showToast = useToast();
  const { name, location, image, rating, tag, price, description } = destination;

  const handleExplore = () => {
    showToast(`✈️ ${name} added to your itinerary!`);
  };

  return (
    <article
      className={`${styles.card} fade-up`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
  
      <div className={styles.imgWrap}>
        <img
          src={image || FALLBACK_IMG}
          alt={name}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
        />
        <div className={styles.imgOverlay} aria-hidden="true" />

    
        <div className={styles.topRow}>
          <span className={styles.tag}>{tag || 'Tropical'}</span>
          <span className={styles.ratingBadge}>
            ★ {Number(rating || 4.8).toFixed(1)}
          </span>
        </div>

      
        <div className={styles.bottomRow}>
          <p className={styles.location}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
          <h3 className={styles.name}>{name}</h3>
        </div>
      </div>

  
      <div className={styles.body}>
        <p className={styles.desc}>
          {description || `Explore the wonders of ${name} and create unforgettable memories.`}
        </p>

        <div className={styles.footer}>
          <div className={styles.price}>
            <strong>${Number(price || 999).toLocaleString()}</strong>
            <span>per person</span>
          </div>
          <button className={styles.exploreBtn} onClick={handleExplore}>
            Explore
          </button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
