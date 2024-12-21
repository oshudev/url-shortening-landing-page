import styles from './Features.module.css';

import featuresData from '@/data/features.json';

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features__header}>
          <h2 className={styles.features__title}>Advance Statistics</h2>
          <p className={styles.features__desc}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={styles.features__list}>
          {featuresData.map((feature, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.card__icon}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className={styles.card__title}>{feature.title}</h3>
              <p className={styles.card__desc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
