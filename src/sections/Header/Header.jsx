import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { useMediaQuery } from '@uidotdev/usehooks';

import ApplicationLogo from '@/components/ApplicationLogo';
import { Button } from '@/components/Button';

import styles from './Header.module.css';

import navData from '@/data/nav.json';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isDesktop = useMediaQuery('only screen and (min-width: 1024px)');

  useEffect(() => {
    if (isDesktop && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }

    const body = document.body;
    const shouldScrollLock = !isDesktop && isMobileNavOpen;

    body.classList.toggle('no-scroll', shouldScrollLock);

    return () => body.classList.remove('no-scroll');
  }, [isDesktop, isMobileNavOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <a
            href="#"
            className={styles.header__logo}
            aria-label="Go to Shortly homepage"
          >
            <ApplicationLogo />
          </a>
          <nav className={styles.header__nav} aria-hidden={!isDesktop}>
            {navData.map((item, index) => (
              <ul className={styles.header__list} key={index}>
                <li className={styles.header__item}>
                  <a href={item.link}>{item.label}</a>
                </li>
              </ul>
            ))}
          </nav>
          <a href="#" className="login" aria-hidden={!isDesktop}>
            Login
          </a>
          <Button
            className="signup"
            variant="rounded"
            size="sm"
            aria-hidden={!isDesktop}
            asChild
          >
            <a href="#">Sign Up</a>
          </Button>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className={`${styles.hamburger} ${isMobileNavOpen ? styles.active : ''}`}
            aria-hidden={isDesktop}
          >
            <span></span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles['mobile-modal-nav']}
          >
            <nav className={styles.modal__nav}>
              {navData.map((item, index) => (
                <a href={item.link} key={index}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#" className="login">
              Login
            </a>
            <Button variant="rounded" size="md" asChild>
              <a href="#">Sign Up</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
