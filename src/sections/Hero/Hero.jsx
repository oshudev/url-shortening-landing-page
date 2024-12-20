import { Button } from '@/components/Button';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__illustration}></div>
        <div className={styles.hero__content}>
          <div className="text-container">
            <h1 className={styles.hero__title}>More than just shorter links</h1>{' '}
            <p className={styles.hero__description}>
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
          </div>
          <Button variant="rounded" asChild>
            <a href="#">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
