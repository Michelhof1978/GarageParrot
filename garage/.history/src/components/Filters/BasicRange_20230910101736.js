import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';


const BasicRange = (props) => {

let name, range, marks;
props.name ? name = props.name : name = "slider"; 
props.range ? range = props.m : min = 0;  
props.marks ? marks = props.marks : marks = [{value:0, label:0},{value:100, label:100}];

const [value, setValue] = React.useState([min, max]);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
   <> 
   
   <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>

      <Slider
        name = {name}
        min = {min}
        max = {max}
        onChange={handleChange}
        size = "medium"
        valueLabelDisplay=""
        marks={marks}
      />
    
   </>
    
  );
};


export default BasicRange;