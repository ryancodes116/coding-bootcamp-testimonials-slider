import React, { useState } from 'react';
import styles from '../styles/Image.module.css';
import bg from '../images/pattern-bg.svg';
import previous from '../images/icon-prev.svg';
import next from '../images/icon-next.svg';

import classNames from 'classnames';

const Image = ({ userImage, toggleReview }) => {
  const handleClick = (e) => {
    const { name } = e.target;
    toggleReview(name);
  };

  return (
    <div className={classNames('container', styles.imageWrapper)}>
      <img src={bg} className={styles.background} />
      <img className={styles.img} src={userImage} />
      <div className={styles.buttonWrapper}>
        <a className={styles.icon} onClick={handleClick}>
          <img src={previous} name="previous" />
        </a>
        <a className={styles.icon} onClick={handleClick}>
          <img src={next} name="next" />
        </a>
      </div>
    </div>
  );
};

export default Image;
