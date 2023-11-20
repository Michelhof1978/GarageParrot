//CHECKBOX

import "../../App.css";

const BasicCheckbox = (props) =>{

    const handleChange = (e) => {
props.handleCheckBoxChange(e)
 // Fonction appelée lorsqu'il y a un changement dans la case à cocher
    }
   return ( <label>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
     
      onChange={handleChange}
    />
   {props.label }
  </label>
  )
}
export default BasicCheckbox;
