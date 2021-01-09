import Image from 'next/image';

import styles from '../styles/Flashcard.module.css';
import spinnerStyles from '../styles/LoadingSpinner.module.css';

const Flashcard = ({ flip, svg, english, changeFlip, spinner }) => {
  return (
    <div
      className={`${styles.cardWrapper} ${styles.flipUp} ${
        flip ? `${styles.flip}` : ''
      }`}
      onClick={changeFlip}
      onKeyDown={changeFlip}
      role="button"
      tabIndex={0}
    >
      {spinner ? (
        <div className={styles.card}>
          <div className={styles.front}>
            <div className={spinnerStyles.ldsEllipsis}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.back}>
            <div className={spinnerStyles.ldsEllipsis}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.front}>
            <Image
              src={`/hiragana/${svg}`}
              layout="fill"
              className={styles.hiragana}
              alt={english}
            />
          </div>
          <div className={styles.back}>{english}</div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
