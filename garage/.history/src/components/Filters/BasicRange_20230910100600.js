import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';


const BasicRange = (props) => {
  const handleChange = () => {};

let name, min, max, marks;
props.name ? name = props.name : name = "slider"; 
props.min ? min = props.min : min = 0; 
props.max ? max = props.max : max = 100; 
props.marks ? marks = props.marks : marks = [{value:0, label:0},{value:100, label:100}];

  return (
   <> 
   
   <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>

      <Slider

        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-label
        marks={marks}
      />
    
   </>
    
  );
};


export default BasicRange;