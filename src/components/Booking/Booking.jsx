import React from 'react';
import { BOOKING_PERKS, TRUST_STATS } from '../../utils/constants';
import BookingForm from './BookingForm';
import styles from './Booking.module.css';

function Booking() {
  return (
    <section className={styles.section} id="booking">
      <div className={`container ${styles.grid}`}>
      
        <div className={`${styles.info} fade-up`}>
          
          <div>
            <span className="section-tag">Book Now</span>
            <h2 className="section-title">
              Your Dream Trip<br />
              <em>Starts Here</em>
            </h2>
            <p className="section-sub">
              Fill in your details and our travel experts will craft the
              perfect itinerary for you.
            </p>
          </div>

    
          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Why Book with Tropique?</h3>
            <p className={styles.highlightSub}>
              Over 50,000 travellers trust us for their tropical escapes.
            </p>
            <ul className={styles.perks}>
              {BOOKING_PERKS.map((perk) => (
                <li key={perk} className={styles.perk}>
                  <span className={styles.dot} aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

      
          <div className={styles.trustRow}>
            {TRUST_STATS.map(({ value, label }) => (
              <div key={label} className={styles.trustItem}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

  
        <div className="fade-up delay-200">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

export default Booking;
