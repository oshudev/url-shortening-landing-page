import { useState } from 'react';

import { useMediaQuery } from '@uidotdev/usehooks';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

import styles from './UrlShortener.module.css';

function UrlShortener() {
  const [error, setError] = useState(false);
  const isTablet = useMediaQuery('only screen and (min-width: 768px)');

  return (
    <section className={styles['url-shortener']}>
      <div className="container">
        <form className={styles.form}>
          <div
            className={`${styles.form__control} ${error ? styles.error : ''}`}
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={styles.form__input}
            />
            {error && (
              <span className={styles['form__error-msg']}>
                Please add a link
              </span>
            )}
          </div>
          <Button size={isTablet ? 'lg' : 'md'}>Shorten It!</Button>
        </form>
        <Card
          source="https://www.frontendmentor.io"
          shortenLink="https://rel.ink/k4lKyk"
        />
      </div>
    </section>
  );
}

export default UrlShortener;
