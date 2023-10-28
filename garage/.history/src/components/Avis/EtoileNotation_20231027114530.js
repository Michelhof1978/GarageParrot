import React, { useState } from 'react';

const EtoileNotation = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);


  const handleStarClick = (star) => {
    setRating(star);
    onRatingChange(star);
  };
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span
        key={i}
        onClick={() => handleStarClick(i)}
        style={{
          cursor: 'pointer',
          color: i <= rating ? 'gold' : 'gray',
        }}
      >
        &#9733; {/* Utilisation du caractère d'étoile Unicode */}
      </span>
    );
  }

  return (
    <div>
      {stars}
      <p>Rating: {rating} out of {totalStars}</p>
    </div>
  );
};

export default EtoileNotation;
