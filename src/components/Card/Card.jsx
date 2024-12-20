import PropTypes from 'prop-types';
import { useCopyToClipboard } from '@uidotdev/usehooks';

import { Button } from '@/components/Button';

import styles from './Card.module.css';

const CardPropTypes = {
  source: PropTypes.string,
  shortenLink: PropTypes.string,
};

function Card({ source, shortenLink }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <div className={styles.card}>
      <div className={styles.card__source}>
        <p>{source}</p>
      </div>
      <div className={styles.card__link}>
        <p>{shortenLink}</p>
        <Button
          onClick={() => copyToClipboard(shortenLink)}
          size="sm"
          data-copy={hasCopiedText}
          className={styles.card__button}
        >
          {hasCopiedText ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </div>
  );
}

Card.displayName = 'Card';
Card.propTypes = CardPropTypes;

export default Card;
