import React from 'react';
import "../../App.css";


const EtoileNote = () => {
  return (
    <div>
      <figure aria-label="noté 3,3 sur 5" className="notation">
        <span role="img" aria-labelledby="rating-6536472f2b03f" style={{ width: '66%' }}></span>
        <figcaption className="sr-only" id="rating-6536472f2b03f">noté 3,3 sur 5</figcaption>
      </figure>

      <span className="sr-only">La note actuelle est de </span>
      <span itemprop="ratingValue">3</span>
      <span className="sr-only"> sur </span>
      <span aria-hidden="true">/</span>5 (<span itemprop="ratingCount">415</span> avis)
    </div>
  );
};

export default EtoileNote;

