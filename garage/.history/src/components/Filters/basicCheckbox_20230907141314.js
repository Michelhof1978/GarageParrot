import React, from "react";
import "../../App.css";





const BasicCheckbox = ({props}) =>{

    const handleChange = () => {



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