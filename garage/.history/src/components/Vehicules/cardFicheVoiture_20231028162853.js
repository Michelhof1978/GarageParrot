import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardFiche from "./CardFiche";

const CardFicheVoiture = () => {
  const { id } = useParams();
  const [vehicule, setVehicule] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost/garageback/front/voiturefiche/all`)
      .then((response) => {
        const vehiculeData = response.data.find((item) => item.idVehicule === id);
        setVehicule(vehiculeData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du véhicule :", error);
      });
  }, [id]);

  if (vehicule === null) {
    return <div>Loading...</div>;
  } else if (!vehicule) {
    return <div>Aucune voiture trouvée pour cet ID.</div>;
  }

  return (
    <div className="row">
      <div className="col-12 mt-3">
        <CardFiche id={vehicule.idVehicule} />
      </div>
    </div>
  );
};

export default CardFicheVoiture;
