//CHECKBOX

import "../../App.css";


// --------------------------------COMPORTEMENTS--------------------------------------------
const BasicCheckbox = (props) => {
  // Fonction appelée lorsqu'il y a un changement dans la case à cocher
  const handleChange = (e) => {
    // Appelle la fonction handleCheckBoxChange passée en prop avec l'événement (e) en argument
    props.handleCheckBoxChange(e);
  };
  // --------------------------------FIN COMPORTEMENTS--------------------------------------------

  // --------------------------------AFFICHAGE--------------------------------------------
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        onChange={handleChange} // Appelle la fonction handleChange lorsqu'il à un changement
        className="ms-4"
      />
      {/* Affiche le texte de l'étiquette passé en prop */}
      {props.label}
    </label>
  );
// --------------------------------FIN AFFICHAGE--------------------------------------------

};
export default BasicCheckbox;
