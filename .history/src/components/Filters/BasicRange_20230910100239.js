import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';


const BasicRange = (props) => {
  const handleChange = () => {};

let name, min, max, marks;
props.name ? name = props.name : name = "slider"; 
props.min ? min = props.min : min = 0; 
props.max ? max = props.max : max = 100; 


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