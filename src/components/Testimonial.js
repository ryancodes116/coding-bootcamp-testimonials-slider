import React, { useState } from 'react';
import Image from './Image';
import Quote from './Quote';

import styles from '../styles/Testimonial.module.css';

import classNames from 'classnames';

import reviews from '../reviews';

const Testimonial = () => {
  console.log(reviews);
  const [review, setReview] = useState(reviews[0]);

  const handleToggle = (name) => {
    name === 'next' ? setReview(reviews[1]) : setReview(reviews[0]);
  };

  return (
    <div className={classNames('container', styles.wrapper)}>
      <Image userImage={review.src} toggleReview={handleToggle} />
      <Quote
        quote={review.quote}
        name={review.name}
        title={review.title}
        className={styles.quote}
      />
    </div>
  );
};

export default Testimonial;
