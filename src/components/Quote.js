import React from 'react';
import quotes from '../images/pattern-quotes.svg';
import curve from '../images/pattern-curve.svg';

import styles from '../styles/Quotes.module.css';

import classNames from 'classnames';

const Quote = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <img src={quotes} />
      <div className={styles.content}>
        <p className={styles.quote}>
          "I've been interested in coding for a while but never taken the jump,
          until now. I couldn't recommend this course enough. I'm now in the job
          of my dreams and so excited about the future."
        </p>
        <p className={styles.name}>Tanya Sinclair</p>
        <p className={styles.title}>UX Engineer</p>
      </div>
    </div>
  );
};

export default Quote;
