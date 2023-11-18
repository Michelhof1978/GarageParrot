import "../../App.css";
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = () => {
    const [rating, setRating] = useState(100) // Va jusqu'à 100 donc la 5 étoile

    const handleRating = (rate) => {
      console.log(rate)
      setRating(rate)
      
    }
    return (
      <Rating
        fillColor="#F0C300"
        //allowHalfIcon //Pour les demi étoile, là, on est à true
        // tooltipArray={['nul', 'bof', 'moyen', 'top', 'génial']}
        transition
        // showTooltip
        onClick={handleRating}
        ratingValue={rating} 
      />
    )
  }
  export default Stars;
  