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
    
    
