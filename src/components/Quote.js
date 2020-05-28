import React from 'react';
import quotes from '../images/pattern-quotes.svg';

import styles from '../styles/Quotes.module.css';

import classNames from 'classnames';

const Quote = ({ quote, name, title }) => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <img src={quotes} />
      <div className={styles.content}>
        <p className={styles.quote}>{quote}</p>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
