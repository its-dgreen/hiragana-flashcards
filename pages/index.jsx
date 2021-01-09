import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Hiragana from '../hiragana.json';
import Flashcard from '../components/flashcard';

//shuffle function from https://stackoverflow.com/a/2450976
const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const Home = ({ hiragana }) => {
  const [flip, setFlip] = useState(false);
  const [hiraganaArray, setHiraganaArray] = useState(hiragana);
  const [currentHiragana, setCurrentHiragana] = useState(hiraganaArray[0]);
  const [correct, setCorrect] = useState(0);
  const [remaining, setRemaining] = useState(hiragana.length);
  const [showSpinner, setShowSpinner] = useState(false);

  const newFlashcard = correct => {
    setShowSpinner(true);
    if (flip) {
      setFlip(!flip);
    }
    setTimeout(() => {
      let newHiraganaArray = hiraganaArray;
      if (correct) {
        newHiraganaArray.shift();
        newHiraganaArray = shuffle(newHiraganaArray);
        setHiraganaArray(newHiraganaArray);
        setCurrentHiragana(newHiraganaArray[0]);
        setCorrect(correct => correct + 1);
        setRemaining(remaining => remaining - 1);
        setShowSpinner(false);
      } else {
        const incorrectFlashcard = newHiraganaArray[0];
        newHiraganaArray.shift();
        newHiraganaArray.push(incorrectFlashcard);
        newHiraganaArray = shuffle(newHiraganaArray);
        setHiraganaArray(newHiraganaArray);
        setCurrentHiragana(newHiraganaArray[0]);
        setShowSpinner(false);
      }
    }, 500);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hiragana Flash Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.correctContainer}>
        <div className={styles.correct}>
          <p>Correct: {correct}</p>
          <p>Remaining: {remaining}</p>
        </div>
      </div>
      <Flashcard
        flip={flip}
        svg={currentHiragana.char_id}
        english={currentHiragana.romanization}
        changeFlip={() => setFlip(!flip)}
        spinner={showSpinner}
      />
      <div className={styles.buttonsContainer}>
        <p>Did you get it correct?</p>
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => newFlashcard(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </button>
          <button className={styles.button} onClick={() => newFlashcard(false)}>
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
};

export async function getServerSideProps() {
  return { props: { hiragana: shuffle(Hiragana) } };
}

export default Home;
