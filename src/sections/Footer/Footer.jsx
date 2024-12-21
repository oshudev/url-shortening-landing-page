import ApplicationLogo from '@/components/ApplicationLogo';
import { Button } from '@/components/Button';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from '@/components/Icons';

import styles from './Footer.module.css';

import navData from '@/data/footer.json';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.banner}>
        <h2 className={styles.banner__title}>Boost your links today</h2>
        <Button variant="rounded" asChild>
          <a href="#">Get Started</a>
        </Button>
      </div>
      <div className={styles['contact-row']}>
        <div className="container">
          <a
            href="#"
            className={styles.footer__logo}
            aria-label="Go to Shortly homepage"
          >
            <ApplicationLogo variant="light" />
          </a>
          <nav className={styles.footer__nav} aria-label="Footer nav">
            {navData.map(({ header, links }) => (
              <div className={styles['footer-nav-container']} key={header}>
                <p>{header}</p>
                <ul className={styles.footer__list}>
                  {links.map((item, index) => (
                    <li className={styles.footer__item} key={index}>
                      <a href={item.link}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className={styles.footer__social}>
            <a href="#" aria-label="facebook.com">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="twitter.com">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="pinterest.com">
              <PinterestIcon />
            </a>
            <a href="#" aria-label="instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
