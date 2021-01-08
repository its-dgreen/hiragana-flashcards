import { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Flashcard.module.css';

const Flashcard = ({ svg, english }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`${styles.cardWrapper} ${styles.flipUp} ${
        flip ? `${styles.flip}` : ''
      }`}
      onClick={() => setFlip(!flip)}
      onKeyDown={() => setFlip(!flip)}
      role="button"
      tabIndex={0}
    >
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
    </div>
  );
};

export default Flashcard;
