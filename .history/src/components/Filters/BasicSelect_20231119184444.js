//DROPDOWN 

import "../../App.css";

const BasicSelect = (props) => {
//on extrait 2 propriètes value et name de l'objet
  const handleChange = (event) => {
      const {value, name} = event.target; 
//handleChange va transmettre la valeur value et name  au composant parent
      props.handleChange(name, value); 
  };

  return (
    <>
//props utilisées pour personnaliser son compprtement 
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
