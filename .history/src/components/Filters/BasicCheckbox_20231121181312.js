//CHECKBOX

import "../../App.css";

const BasicCheckbox = (props) =>{

// Fonction appelée lorsqu'il y a un changement dans la case à cocher
    const handleChange = (e) => {

 // Appelle la fonction handleCheckBoxChange passée en prop avec l'événement en argument
props.handleCheckBoxChange(e)
 ²
    }

    // Rendu du composant
   return ( <label>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
     
      onChange={handleChange} // Appelle la fonction handleChange en cas de changement
    />
      {/* Affiche le texte de l'étiquette passé en prop */}
   {props.label }
  </label>
  )
}
export default BasicCheckbox;