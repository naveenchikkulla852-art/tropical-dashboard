import React, { useState } from 'react';
import { FALLBACK_DESTINATIONS } from '../../utils/constants';
import { validateBookingForm } from '../../utils/helpers';
import { useToast } from '../../context/ToastContext';
import styles from './BookingForm.module.css';

const INITIAL_FORM = {
  name:        '',
  email:       '',
  date:        '',
  destination: '',
  passengers:  '1',
  message:     '',
};

function BookingForm() {
  const showToast           = useToast();
  const [form, setForm]     = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateBookingForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setForm(INITIAL_FORM);
      setErrors({});
      showToast(
        `🎉 Booking confirmed for ${form.destination}! We'll email you shortly.`
      );
    }, 1600);
  };

  const FieldError = ({ field }) =>
    errors[field] ? (
      <span className={styles.fieldError} role="alert">
        {errors[field]}
      </span>
    ) : null;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Reserve Your Escape</h3>
      <p className={styles.sub}>Complete the form — we'll handle the rest.</p>

      
      <div className={styles.row}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="name">Full Name *</label>
          <input
            id="name"
            className={styles.input}
            style={{ borderColor: errors.name ? 'var(--coral)' : undefined }}
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <FieldError field="name" />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="email">Email Address *</label>
          <input
            id="email"
            className={styles.input}
            style={{ borderColor: errors.email ? 'var(--coral)' : undefined }}
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <FieldError field="email" />
        </div>
      </div>

    
      <div className={styles.row}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="date">Departure Date *</label>
          <input
            id="date"
            className={styles.input}
            style={{ borderColor: errors.date ? 'var(--coral)' : undefined }}
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
          <FieldError field="date" />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="passengers">Passengers</label>
          <select
            id="passengers"
            className={styles.select}
            value={form.passengers}
            onChange={(e) => handleChange('passengers', e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'person' : 'people'}
              </option>
            ))}
          </select>
        </div>
      </div>

  
      <div className={styles.group}>
        <label className={styles.label} htmlFor="destination">Destination *</label>
        <select
          id="destination"
          className={styles.select}
          style={{ borderColor: errors.destination ? 'var(--coral)' : undefined }}
          value={form.destination}
          onChange={(e) => handleChange('destination', e.target.value)}
        >
          <option value="">Select a destination…</option>
          {FALLBACK_DESTINATIONS.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name} — {d.location}
            </option>
          ))}
        </select>
        <FieldError field="destination" />
      </div>

      
      <div className={styles.group}>
        <label className={styles.label} htmlFor="message">Special Requests</label>
        <textarea
          id="message"
          className={styles.textarea}
          rows={3}
          placeholder="Dietary needs, accessibility requirements, special occasions…"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
      </div>

  
      <button
        className={styles.submit}
        onClick={handleSubmit}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <span className={styles.loadingRow}>
            <span className="spinner" />
            Processing…
          </span>
        ) : (
          '✈️  Book Now'
        )}
      </button>

      <p className={styles.secureNote}>🔒 Your details are safe and never shared</p>
    </div>
  );
}

export default BookingForm;
