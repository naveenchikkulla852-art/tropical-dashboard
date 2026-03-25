import React from 'react';
import { scrollToId } from '../../utils/helpers';
import Stars from '../ui/Stars';
import styles from './Featured.module.css';

const FEATURED = {
  badge:       '🏆 Top Rated 2024',
  location:    'South Asian Island, Indian Ocean',
  name:        'The Maldives',
  description: `A necklace of 26 atolls scattered across turquoise waters, the Maldives
    is the pinnacle of tropical escapes. From overwater bungalows to thriving coral
    gardens, every moment is a postcard come to life.`,
  image:       'https://images.unsplash.com/photo-1573790387438-4da905039392?w=900&q=80',
  meta:        [
    { value: '7',      label: 'Days'   },
    { value: '$2,400', label: 'From'   },
    { value: '4.9',    label: 'Rating' },
  ],
  rating:      4.9,
  reviewCount: '2,340',
};

function Featured() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
      
        <div className={styles.header}>
          <span className="section-tag light">Featured</span>
          <h2 className="section-title light">
            Our Most Loved <em>Destination</em>
          </h2>
          <p className="section-sub light">
            Where crystal waters meet infinite sky — a once-in-a-lifetime
            experience awaits.
          </p>
        </div>

    
        <div className={`${styles.card} fade-up`}>
        
          <div className={styles.visual}>
            <img src={FEATURED.image} alt={FEATURED.name} />
            <div className={styles.visualOverlay} aria-hidden="true" />
            <span className={styles.badge}>{FEATURED.badge}</span>
          </div>

          
          <div className={styles.content}>
            <p className={styles.location}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {FEATURED.location}
            </p>

            <h2 className={styles.name}>{FEATURED.name}</h2>
            <p className={styles.desc}>{FEATURED.description}</p>

            <div className={styles.meta}>
              {FEATURED.meta.map(({ value, label }) => (
                <div key={label} className={styles.metaItem}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.rating}>
              <Stars rating={FEATURED.rating} />
              <span>{FEATURED.rating} ({FEATURED.reviewCount} reviews)</span>
            </div>

            <div className={styles.actions}>
              <button
                className="btn-sea"
                onClick={() => scrollToId('booking')}
              >
                See More
              </button>
              <button className="btn-ghost" style={{ padding: '12px 24px', fontSize: 14 }}>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
