import React from 'react';
import Image from './Image';
import Quote from './Quote';

import styles from '../styles/Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.wrapper}>
      <Image />
      <Quote />
    </div>
  );
};

export default Testimonial;
