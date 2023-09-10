import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';

const BasicRange = (props) => {
  const handleChange = () => {};
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
    {/* <div className="range-filter">
      <span>{props.min}€</span>
      <input
        type="range"
        name="prixMin"
        min={props.min}
        max={props.max}
        value={filtres.prixMin}
        onChange={handleInputChange}
        onMouseMove={(e) => handleMouseMove(e, "prix")}
       
      />
      <span>{props.max} €</span>
     
    </div> */}
   </>
    
  );
};



function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
   
  );
}
export default BasicRange;