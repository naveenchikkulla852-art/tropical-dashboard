import React from 'react';
import { FOOTER_LINKS } from '../../utils/constants';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        
        <div className={styles.grid}>
          
          <div className={styles.brand}>
            <p className={styles.logo}>
              Tropi<span>que</span>
            </p>
            <p className={styles.tagline}>
              Your gateway to the world's most breathtaking tropical
              destinations. Travel more, worry less.
            </p>
          </div>

        
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colHeading}>{heading}</h4>
              <ul className={styles.links}>
                {links.map((link) => (
                  <li key={link}>
                    <button className={styles.link}>{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

  
        <div className={styles.bottom}>
          <span>© {year} Tropique. All rights reserved.</span>
          <div className={styles.legal}>
            {['Privacy', 'Terms', 'Sitemap'].map((l) => (
              <button key={l} className={styles.link}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
