import React from 'react';

const EInfo = ({ ratingValue, ratingCount }) => {
  return (
    <div>
      <span className="sr-only"> La note actuelle est de </span>
      <span itemprop="ratingValue">{ratingValue}</span>
      <span className="sr-only"> sur </span>
      <span aria-hidden="true">/</span>{' '}
      <span itemprop="ratingCount">{ratingCount}</span> avis
    </div>
  );
};

export default RatingInfo;
