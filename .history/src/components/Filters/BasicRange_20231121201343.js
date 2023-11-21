//SLIDER

import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const BasicRange = ({
  name = "slider",
  range = [0, 100],
  marks,
  label = "",
  handleChange,
}) => {
  // Utilisation de destructuring pour extraire les valeurs des props avec des valeurs par défaut

  // Tri du tableau range si nécessaire, de sorte que la valeur la plus petite soit toujours en 1ère position et la plus grande en dernière
  // On l'utilisera car pour les 3 composants prix, km et année, leurs valeurs sont des entiers et que sort trie uniquement des chaînes de caractères.
  range.sort((a, b) => a - b);

  // Utilisation de useState pour gérer la valeur actuelle du slider
  const [value, setValue] = useState(range);

  // Fonction de gestion du changement de valeur du slider
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    handleChange(name, newValue); // Appel de la fonction handleChange du parent avec le nom et la nouvelle valeur
  };

  return (
    <>
      {/* Affiche une typographie avec un identifiant "input-slider" et un espace en bas */}
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>

      {/* Utilise le composant Slider de Material-UI */}
      <Slider
        name={name}
        min={range[0]}
        max={range[1]}
        onChange={handleSliderChange}
        size="medium"
        valueLabelDisplay="auto" // Afficher la valeur actuelle
        marks={
          marks || [
            { value: range[0], label: range[0].toString() },
            { value: range[1], label: range[1].toString() },
          ]
        }
        value={value}
      />
    </>
  );
};

export default BasicRange;
