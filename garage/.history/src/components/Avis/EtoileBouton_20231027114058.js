import React, { useState } from 'react';
import EtoileNotation from "../../components/Avis/EtoileNotation";


const EtoileBouton = () => {
  const [rating, setRating] = useState(3);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h1>Star Rating Example</h1>
      <StarRating totalStars={5} initialRating={rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default EtoileBouton;
