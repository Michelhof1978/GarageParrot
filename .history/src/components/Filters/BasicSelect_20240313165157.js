//DROPDOWN

import "../../App.css";

//fonction fléchée  prenant un objet props en tant que paramètre.
const BasicSelect = (props) => {

  // Fonction nommée handleChange qui sera appelée lorsqu'une option est modifiée dans le menu déroulant. 
  //Elle extrait la valeur (value) et le nom (name) de l'option sélectionnée à partir de event.target, puis appelle la fonction handleChange passée en prop du composant parent avec ces valeurs.
  const handleChange = (event) => {

    //on extrait 2 propriètes value et name de l'objet event.target
    //event.target fait référence à l'élément DOM qui a déclenché un événement comme un clic ou un changement de valeur
    const { value, name } = event.target;

    //On appelle la fonction handleChange passée en prop du composant parent avec les valeurs extraites
    props.handleChange(name, value);
  };

  return (
    <>
      {/* Le composant va recevoir les(`props`) en entrée, qui seront utilisées pour personnaliser son comportement et son apparence. */
      <label> : C'est un élément de balisage HTML représentant une étiquette associée à un contrôle d'entrée, comme un champ de saisie de texte ou un menu déroulant. Dans ce contexte, c'est l'élément utilisé pour afficher un libellé associé à un champ de formulaire ou à un autre élément de l'interface utilisateur.

{props.label} : C'est une expression JavaScript insérée entre les accolades {} dans JSX. Dans ce cas, props.label fait référence à une propriété (label) passée au composant BasicSelect sous forme de prop. Cette prop label est utilisée pour déterminer le texte à afficher dans l'étiquette.

Donc, dans l'ensemble, cette ligne <label>{props.label}</label> rend un élément HTML <label> qui affiche le contenu spécifié par la prop label passée au composant BasicSelect. Cela permet d'associer un libellé à un menu déroulant pour aider les utilisateurs à comprendre l'objectif du champ de formulaire.}
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
