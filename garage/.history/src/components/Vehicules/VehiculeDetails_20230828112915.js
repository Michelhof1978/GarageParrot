import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VehiculeCard from "../../components/Vehicules/vehiculeCard";

const VehiculeDetail = () => {
    // Appeler les Hooks ici, à l'intérieur du composant
    const { id } = useParams();
    const [vehicule, setVehicule] = useState({}); // à supposer que vous voulez utiliser useState pour stocker le détail du véhicule

    useEffect(() => {
        // Supposons que vous voulez obtenir les détails du véhicule en fonction de l'ID à partir de l'API
        axios.get(`votre_url_api/vehicules/${id}`)
            .then(response => {
                setVehicule(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des détails du véhicule:", error);
            });
    }, [id]); // Exécutez useEffect chaque fois que l'ID change

    return (
        <div className="container">
            <div className="row">
                {/* Afficher les détails du véhicule */}
                <div className="col-md-12">
                    <h2>{vehicule.marque} - {vehicule.modele}</h2>
                    <img src={vehicule.imagevoiture} alt={vehicule.marque} />
                    <p>Carburant : {vehicule.energie}</p>
                    <p>Prix : {vehicule.prix} €</p>
                    {/* Ajouter plus de détails si nécessaire */}
                </div>
            </div>
        </div>
    );
};

export default VehiculeDetail;

          <img src={vehicule.imagevoiture} alt={vehicule.marque} />
          <p>Date 1ère année circulation : {vehicule.datecirculation}</p>
          <p>Couleur : {vehicule.couleur}</p>
          <p>Nombre de places : {vehicule.place}</p>
          <p>Energie : {vehicule.energie}</p>
          <p>Année : {vehicule.annee}</p>
          <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
          <p>Kilométrage : {vehicule.kilometrage}</p>
          <p>Boîte de vitesse : {vehicule.boitevitesse}</p>
          <p>Puissance : {vehicule.puissance}</p>
          <p>Prix : {vehicule.prix} €</p>
          {/* Ajouter plus de détails si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default VehiculeDetail;
