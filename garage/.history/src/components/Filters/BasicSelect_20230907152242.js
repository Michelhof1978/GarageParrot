import "../../App.css";

const BasicSelect = (props) => {
  const handleChange = () => {};
  return (
    <>
      <label>{props.label}</label>
      <select
        name={props.name}
        
        onChange={handleChange}
      >

      {props.options.map((ele, idx) => {

        if(
            idx = 0
        
        )

        {   return(<option selected value={ele.value}>{ele.text}</option>) 
        
         }else{ return



      })}
 {/* selected = selectionne toutes les marques */}
        <option value="citroen">Citroën</option>
        <option value="peugeot">Peugeot</option>
        <option value="kia">Kia</option>
        <option value="bmw">BMW</option>
      </select>
    </>
  );
};

export default BasicSelect;
