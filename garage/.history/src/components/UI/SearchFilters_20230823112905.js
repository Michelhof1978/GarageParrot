import React, { useState } from "react";
import axios from "axios";
import "../../App.css";






Je m'excuse pour la confusion. Voici comment vous pouvez mettre en place les filtres d'année et de kilométrage de manière similaire au filtre de prix :

```jsx
// ...

<div className="filter-row">
  <label>Année :</label>
  <div className="range-filter">
    <span>{filtres.anneeMin}</span>
    <input
      type="range"
      name="anneeMin"
      min="2000"
      max="2023"
      value={filtres.anneeMin}
      onChange={handleInputChange}
      step="1"
    />
    <span>{filtres.anneeMax}</span>
    <input
      type="range"
      name="anneeMax"
      min="2000"
      max="2023"
      value={filtres.anneeMax}
      onChange={handleInputChange}
      step="1"
    />
  </div>
</div>

<div className="filter-row">
  <label>Kilométrage :</label>
  <div className="range-filter">
    <span>{filtres.kilometrageMin}</span>
    <input
      type="range"
      name="kilometrageMin"
      min="0"
      max="200000"
      value={filtres.kilometrageMin}
      onChange={handleInputChange}
      step="1000"
    />
    <span>{filtres.kilometrageMax}</span>
    <input
      type="range"
      name="kilometrageMax"
      min="0"
      max="200000"
      value={filtres.kilometrageMax}
      onChange={handleInputChange}
      step="1000"
    />
  </div>
</div>

// ...
```

Cela ajoutera des curseurs de plage pour les filtres d'année et de kilométrage, avec des valeurs minimales et maximales affichées à gauche et à droite du curseur, ainsi que les valeurs actuelles affichées au-dessus du curseur pendant que vous déplacez la souris. Assurez-vous d'avoir les styles CSS appropriés pour rendre l'interface utilisateur agréable à voir.