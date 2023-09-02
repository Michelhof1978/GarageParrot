import React, { useState } from "react";
import axios from "axios";
import "../../App.css";














        <div className="range-filter">
          <span>0 km</span>
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
          <span>{currentMousePosition.kilometrage.toFixed(0)} km</span>
          <span>{currentMousePosition.kilometrage === 200000 ? "200000 km" : ""}</span>
        </div>
      </div>

      {/* Filtre par famille */}
      <div className="filter-row">
        <label>Famille :</label>
        <div className="checkbox-filter">
          <label>
            <input
              type="checkbox"
              name="famille"
              value="utilitaire"
              checked={filtres.famille.includes("utilitaire")}
              onChange={handleFamilleChange}
            />
            Utilitaire
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="berline"
              checked={filtres.famille.includes("berline")}
              onChange={handleFamilleChange}
            />
            Berline
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="familiale"
              checked={filtres.famille.includes("familiale")}
              onChange={handleFamilleChange}
            />
            Familiale
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="citadine"
              checked={filtres.famille.includes("citadine")}
              onChange={handleFamilleChange}
            />
            Citadine
          </label>
          <label>
            <input
              type="checkbox"
              name="famille"
              value="suv"
              checked={filtres.famille.includes("suv")}
              onChange={handleFamilleChange}
            />
            SUV
          </label>
        </div>
      </div>

      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchFilters;
