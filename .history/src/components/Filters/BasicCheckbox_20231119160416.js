//CHECKBOX

import "../../App.css";

const BasicCheckbox = (props) =>{

// Fonction appelée lorsqu'il y a un changement dans la case à cocher
    const handleChange = (e) => {

 // Appelle la fonction handleCheckBoxChange passée en prop avec l'événement en argument
props.handleCheckBoxChange(e)
 
    }

    // Rendu du composant
   return ( <label>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
     
      onChange={handleChange} // Appelle la fonction handleChange en cas de changement
    />
    
   {props.label }
  </label>
  )
}
export default BasicCheckbox;
