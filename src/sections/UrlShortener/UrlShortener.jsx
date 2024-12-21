import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

import { shortenUrl } from '@/api/cleanuri';

import styles from './UrlShortener.module.css';

function UrlShortener() {
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const isTablet = useMediaQuery('only screen and (min-width: 768px)');

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!longUrl.trim()) {
      setError('Please add a link');
      return;
    }

    const result = await shortenUrl(longUrl);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setSubmittedUrl(longUrl);
    setShortUrl(result.shortUrl);
  };

  return (
    <section className={styles['url-shortener']}>
      <div className="container">
        <form onSubmit={submit} className={styles.form}>
          <div
            className={`${styles.form__control} ${error ? styles.error : ''}`}
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={styles.form__input}
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
            {error && (
              <span className={styles['form__error-msg']}>{error}</span>
            )}
          </div>
          <Button type="submit" size={isTablet ? 'lg' : 'md'}>
            Shorten It!
          </Button>
        </form>
        {shortUrl && <Card source={submittedUrl} shortenLink={shortUrl} />}
      </div>
    </section>
  );
}

export default UrlShortener;
