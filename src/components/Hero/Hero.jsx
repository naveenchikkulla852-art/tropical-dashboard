import React from 'react';
import { HERO_STATS } from '../../utils/constants';
import { scrollToId } from '../../utils/helpers';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      
      <div className={styles.bg} aria-hidden="true" />
      
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <p className={`${styles.eyebrow} fade-in`}>Explore the World</p>

        <h1 className={`${styles.title} fade-up delay-100`}>
          Discover<br />
          <em>Paradise</em>
        </h1>

        <p className={`${styles.subtitle} fade-up delay-200`}>
          Handpicked tropical destinations with exclusive deals.
          <br />
          Your dream escape is just one booking away.
        </p>

        <div className={`${styles.actions} fade-up delay-300`}>
          <button
            className="btn-primary"
            onClick={() => scrollToId('destinations')}
          >
            Explore Destinations
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollToId('booking')}
          >
            Book Now
          </button>
        </div>

        <div className={`${styles.stats} fade-up delay-400`}>
          {HERO_STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

    
      <div className={`${styles.scroll} float`} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
