import "../../App.css";


const BasicCheckbox = (props) =>{

    const handleChange = () => {

    }
   return ( <label>
    <input
      name={pr      type="checkbox"
ops.name}
      value={props.value}
     
      onChange={handleChange}
    />
   {props.label }
  </label>
  )

}

export default BasicCheckbox;