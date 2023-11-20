//DROPDOWN 

import "../../App.css";

const BasicSelect = (props) => {

  //Fonction appelée lorsqu'il y a un changement ds le menu déroulant
      const handleChange = (event) => {

//on extrait 2 propriètes value et name de l'objet event.target
      const {value, name} = event.target;
      
//On appelle la fonction handleChange pass
      props.handleChange(name, value); //handleChange va transmettre la valeur value et name  au composant parent
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
