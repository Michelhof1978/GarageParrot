import React, { Component } from "react";

import React from 'react';

class StarRating extends React.Component {
  render() {
    const rating = 3.3;
    const totalRatings = 415;
    const starWidth = (rating / 5) * 100 + '%';

    return (
      <div className="notation">
        <figure aria-label={`noté ${rating} sur 5`} className="notation">
          <span role="img" aria-labelledby="rating-6536472f2b03f" style={{ width: starWidth }}></span>
          <figcaption className="sr-only" id="rating-6536472f2b03f">{`noté ${rating} sur 5`}</figcaption>
        </figure>

        <span className="sr-only">La note actuelle est de </span>
        <span itemprop="ratingValue">{rating}</span>
        <span className="sr-only"> sur </span>
        <span aria-hidden="true">/</span>5 (<span itemprop="ratingCount">{totalRatings}</span> avis)
      </div>
    );
  }
}

export default StarRating;
