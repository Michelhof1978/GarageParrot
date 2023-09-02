import React, { useState } from "react";
import axios from "axios";
import "../../App.css";












{/* Filtre de prix */}
<div className="filter-row">
  <label>Prix :</label>
  <div className="range-filter">
    <span>{currentMousePosition.prix.toFixed(0)} €</span>
    <input
      type="range"
      name="prixMin"
      min="5000"
      max="50000"
      value={filtres.prixMin}
      onChange={handleInputChange}
      onMouseMove={(e) => handleMouseMove(e, "prix")}
      step="1000"
    />
    <span>{currentMousePosition.prix >= 50000 ? "50000" : ""}</span>
  </div>
</div>

{/* Filtre d'année */}
<div className="filter-row">
  <label>Année :</label>
  <div className="range-filter">
    <span>{currentMousePosition.annee.toFixed(0)}</span>
    <input
      type="range"
      name="anneeMin"
      min="2000"
      max="2023"
      value={filtres.anneeMin}
      onChange={handleInputChange}
      onMouseMove={(e) => handleMouseMove(e, "annee")}
      step="1"
    />
    <span>{currentMousePosition.annee >= 2023 ? "2023" : ""}</span>
  </div>
</div>

{/* Filtre de kilométrage */}
<div className="filter-row">
  <label>Kilométrage :</label>
  <div className="range-filter">
    <span>{currentMousePosition.kilometrage.toFixed(0)}</span>
    <input
      type="range"
      name="kilometrageMin"
      min="0"
      max="200000"
      value={filtres.kilometrageMin}
      onChange={handleInputChange}
      onMouseMove={(e) => handleMouseMove(e, "kilometrage")}
      step="1000"
    />
    <span>{currentMousePosition.kilometrage >= 200000 ? "200000" : ""}</span>
  </div>
</div>
