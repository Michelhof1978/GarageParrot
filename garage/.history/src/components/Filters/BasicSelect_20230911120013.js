import "../../App.css";

const BasicSelect = (props) => {
  
  const handleChange = (event) => {
      const {value, name} = event.target; //récupérer la valeur et name du select
      props.handleChange(value, name); //appeler la fonction handleChange du composant parent
  };

  return (
    <>
      <label>{props.label}</label>
      <select
        name={props.name}
        
        onChange={handleChange}
      >

      {props.options.map((ele, idx) => { //element , index

        if(
            idx = 0
        
        )

        {   return(<option selected value={ele.value}>{ele.text}</option>) 
        
         }else{ return(<option value={ele.value}>{ele.text}</option>) }

      })
      }
 
      </select>
    </>
  );
};

export default BasicSelect;