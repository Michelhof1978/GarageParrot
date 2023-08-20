import React from "react";

const TitreH1 = (props) => {
  const componentStyle = {
    backgroundColor: props.bgColor || 'white', // Couleur de fond passée ou blanc par défaut
    // Autres styles si nécessaire
  };

  return (
    <h1 style={componentStyle}>
      {props.children}
    </h1>
  );
};

export default TitreH1;


