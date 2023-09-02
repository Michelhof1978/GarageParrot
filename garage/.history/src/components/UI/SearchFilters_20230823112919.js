import React, { useState } from "react";
import axios from "axios";
import "../../App.css";






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
