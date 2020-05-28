import React, { useState } from 'react';
import styles from '../styles/Image.module.css';
import tanya from '../images/image-tanya.jpg';
import john from '../images/image-john.jpg';
import bg from '../images/pattern-bg.svg';

import classNames from 'classnames';

const Image = () => {
  return (
    <div className={classNames('container', styles.imageWrapper)}>
      <img src={bg} className={styles.background} />
      <img className={styles.img} src={tanya} />
    </div>
  );
};

export default Image;
