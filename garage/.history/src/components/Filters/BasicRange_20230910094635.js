import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';

const BasicRange = (props) => {
  const handleChange = () => {};

let min, max 
  return (
   <> 
   
   <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    
   </>
    
  );
};


export default BasicRange;