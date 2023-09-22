import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

//Propriétés configurables pour name, range....
const BasicRange = (props) => {

let name, range, marks, label;
//Condition térnaire : si aucune valeur n'est passée en props, on met une valeur par défaut
props.name ? name = props.name : name = "slider"; 
props.range ? range = props.range : range = [0,100];  
props.marks ? marks = props.marks : marks = [{value:0, label:"0"},{value:100, label:"100"}];
props.label ? label = props.label : label = "";
range = range.sort();

const [value, setValue] = React.useState(range); //value va stocker ds le state la valeur actuelle du slider

const handleChange = (event, newValue) => {//Lorsque la valeur du slidr change la fonction handle
 
  setValue(newValue);
 props.handleChange(name,newValue);

};

  return (

   <> 
   
   <Typography id="input-slider" gutterBottom>
       {label}
       
        </Typography>

      <Slider
        name = {name}
        min = {range[0]}
        max = {range[1]}
        onChange={handleChange}
        size = "medium"
        valueLabelDisplay=""
        marks={marks}
        value = {value}
        
      />
    
   </>
    
  );
};


export default BasicRange;

