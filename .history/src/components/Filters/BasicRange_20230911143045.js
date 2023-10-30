import "../../App.css";
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const BasicRange = (props) => {

let name, range, marks, label;
props.name ? name = props.name : name = "slider"; 
props.range ? range = props.range : range = [0,100];  
props.marks ? marks = props.marks : marks = [{value:0, label:"0"},{value:100, label:"100"}];
props.label ? label = props.label : label = "";
range = range.sort();

const [value, setValue] = React.useState(range);

const handleChange = (event, newValue) => {
 
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

asicRange :

Ce composant crée un slider avec des propriétés configurables telles que le nom (name), la plage (range), les marques (marks), et l'étiquette (label).
Si aucune valeur n'est passée pour une de ces propriétés, il utilise des valeurs par défaut (nom par défaut "slider", plage par défaut [0, 100], marques par défaut [{value:0, label:"0"}, {value:100, label:"100"}], et aucune étiquette par défaut).
Le slider utilise l'état local (value) pour stocker la valeur actuelle du slider.
Lorsque la valeur du slider change, la fonction handleChange est appelée, qui met à jour l'état local avec la nouvelle valeur et appelle la fonction props.handleChange(name, newValue) pour transmettre la valeur au composant parent.