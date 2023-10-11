import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const BasicRange = ({ name = "slider", range = [0, 100], marks, label = "", handleChange }) => {
  range.sort((a, b) => a - b);

  const [value, setValue] = useState(range);

  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    handleChange(name, newValue); 
  };

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>

      <Slider
        name={name}
        min={range[0]}
        max={range[1]}
        onChange={handleSliderChange}
        size="medium"
        valueLabelDisplay="auto" // Afficher la valeur actuelle
        marks={marks || [{ value: range[0], label: range[0].toString() }, { value: range[1], label: range[1].toString() }]}
        value={value}
      />
    </>
  );
};

export default BasicRange;
