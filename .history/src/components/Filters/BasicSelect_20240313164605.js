//DROPDOWN

import "../../App.css";

//fonction fléchée  prenant un objet props en tant que paramètre.
const BasicSelect = (props) => {

  // Fonction nommée handleChange qui sera appelée lorsqu'une option est modifiée dans le menu déroulant. 
  //Elle extrait la valeur (value) et le nom (name) de l'option sélectionnée à partir de event.target, puis appelle la fonction handleChange passée en prop du composant parent avec ces valeurs.
  const handleChange = (event) => {
    //on extrait 2 propriètes value et name de l'objet event.target
    const { value, name } = event.target;

    //On appelle la fonction handleChange passée en prop du composant parent avec les valeurs extraites
    props.handleChange(name, value);
  };

  return (
    <>
      {/* Le composant va recevoir les(`props`) en entrée, qui seront utilisées pour personnaliser son comportement et son apparence. */}
      <label>{props.label}</label>

      <select name={props.name} onChange={handleChange}>
        {props.options.map((ele, idx) => {
          //element , index

          if (idx === 0) {
            return (
              <option selected value={ele.value}>
                {ele.text}
              </option>
            );
          } else {
            return <option value={ele.value}>{ele.text}</option>;
          }
        })}
      </select>
    </>
  );
};

export default BasicSelect;
