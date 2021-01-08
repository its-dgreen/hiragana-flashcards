import Head from 'next/head';
import styles from '../styles/Home.module.css';

// import Harigana from '../files/harigana.json';
import Flashcard from '../components/flashcard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {Harigana.map((harigana, index) => (
        <Flashcard
          key={index}
          svg={harigana.char_id}
          english={harigana.romanization}
        />
      ))} */}
      <div className={styles.correctContainer}>
        <div className={styles.correct}>
          <p>Correct: 0</p>
          <p>Remaining: 0</p>
        </div>
      </div>
      <Flashcard svg="a.svg" english="a" />
      <div className={styles.buttonsContainer}>
        <p>Did you get it correct?</p>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </button>
          <button className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
