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
{/* props utilisées pour personnaliser son compprtement et son apparence. */}
      <label>{props.label}</label>
      
      <select
        name={props.name}
        
        onChange={handleChange}
      >
{/* fonction `map` qui itère sur les options fournies dans le tableau `props.options` */}
      {props.options.map((ele, idx) => { //element , index

        if(
Pour chaque option, il vérifie si l'indice actuel (`idx`) est égal à 0. 
Si c'est le cas, l'option est marquée comme sélectionnée à l'aide de l'attribut `selected`; sinon, c'est une option régulière.
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
