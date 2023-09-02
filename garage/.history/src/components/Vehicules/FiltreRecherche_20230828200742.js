import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function FilterSearch() {
  const [sliderValue, setSliderValue] = useState([0, 100]); // Valeurs initiales du curseur

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Filtrer par prix
      </Typography>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={100}
      />
      <Typography>
        Min: {sliderValue[0]} - Max: {sliderValue[1]}
      </Typography>
      {/* Ici, vous pouvez afficher les résultats filtrés en utilisant la valeur du curseur */}
      {/* par exemple, en appelant une fonction de filtrage ou en interagissant avec votre API */}
    </div>
  );
}

export default FilterSearch;
