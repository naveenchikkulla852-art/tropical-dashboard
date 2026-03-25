import React, { useState } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import { scrollToId } from '../../utils/helpers';
import useScrolled from '../../hooks/useScrolled';
import styles from './Navbar.module.css';

function Navbar() {
  const scrolled          = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    scrollToId(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
        
          <button className={styles.logo} onClick={() => scrollToId('hero')}>
            Tropi<span>que</span>
          </button>

          
          <ul className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  className={styles.link}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

        
          <button
            className={styles.cta}
            onClick={() => scrollToId('booking')}
          >
            Explore
          </button>

          
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span className={mobileOpen ? styles.lineTop : ''} />
            <span className={mobileOpen ? styles.lineMid : ''} />
            <span className={mobileOpen ? styles.lineBot : ''} />
          </button>
        </div>
      </nav>

      
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              className={styles.mobileLink}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </button>
          ))}
          <button
            className={`${styles.cta} ${styles.mobileCta}`}
            onClick={() => { scrollToId('booking'); setMobileOpen(false); }}
          >
            Explore
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
