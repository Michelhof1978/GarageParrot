import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const VehiculeCard = () => {
  const [vehicules, setVehicules] = useState([]); // hook useState pour créer un état local appelé vehicules, qui sera initialisé en tableau vide.
@@ -51,8 +51,8 @@ const VehiculeCard = () => {
                <p className="card-text">Prix: {vehicule.prix} €</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">En savoir plus</button>
              </div>
    <Link to={`/vehiculedetail/${vehicule.idVehicule}`} className="btn btn-primary">En savoir plus</Link>
  </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-numbers">
          {numerosDePage.map((numeroDePage) => (
            <span
              key={numeroDePage}
              className={`numero-de-page ${pageCourante === numeroDePage ? "actif" : ""}`}
              onClick={() => changerDePage(numeroDePage)}
            >
              {numeroDePage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VehiculeCard;