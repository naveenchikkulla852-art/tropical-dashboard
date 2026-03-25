import React from 'react';
import { PROMO_OFFERS } from '../../utils/constants';
import { scrollToId } from '../../utils/helpers';
import styles from './Promo.module.css';

function Promo() {
  return (
    <section className={styles.section} id="membership">
      
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
    
        <div className={styles.copy}>
          <span className={styles.badge}>🎓 Student Offer — Limited Time</span>

          <h2 className={styles.title}>
            Travel More,<br />
            Pay <strong>Less</strong>
          </h2>

          <p className={styles.desc}>
            Students and young explorers get exclusive discounts on every
            booking. Verify your student status and unlock a world of savings
            on tropical escapes.
          </p>

          
          <div className={styles.offers}>
            {PROMO_OFFERS.map(({ value, label }) => (
              <div key={label} className={styles.offer}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              className="btn-white"
              onClick={() => scrollToId('booking')}
            >
              Book with Discount
            </button>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </div>

        
        <div className={`${styles.visual} float`} aria-hidden="true">
          <div className={styles.bigNum}>30%</div>
          <div className={styles.bigLabel}>Student Discount</div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
