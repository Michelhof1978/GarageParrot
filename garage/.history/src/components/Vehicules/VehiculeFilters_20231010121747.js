import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "./VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";
import BasicCheckbox from "../filters/BasicCheckbox";
import BasicSelect from "../filters/BasicSelect";
import BasicRange from "../filters/BasicRange";

//La fonction prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculeFilters = ({ onSearch }) => {
  //Fonction pour obtenir l'année actuelle en utilisant l'objet date.
  const getCurrentYear = () => {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    return anneeActuelle;
  };

   // Le composant va suivre l'état local qui est filtres qui va suivre les valeurs séléctionnéées par l'utilisateur.
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    prix: [5000, 50000],
    kilometrage: [0, 200000],
    annee: [2000, getCurrentYear()], // On appelle la fonction getCurrentYear() pour avoir l'année actuelle
  });

  const [lien, setLien] = useState("http://localhost/garageback/API/vehicules.php")

   //Impossible de communiquer directement entre parents et fils, on utilisera donc la fonction handlechange pour le faire, il sera passer en props pour chaque composant fils
  const handleChange = (name, newValue) => {
    setFiltres({ ...filtres, [name]: newValue }); //prendra 2 paramètres name (le nom du filtre à mettre à jour et newValue, la nouvelle valeur du filtre.
  };

  const handleCheckBoxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFiltres({ ...filtres, [name]: [...filtres.famille, value] });
    } else {
      setFiltres({
        ...filtres,
        [name]: filtres.famille.filter((ele) => ele !== value),
      });
    }
  };
  
  const handleClick = ()=> {
        let lienTmp = "http://localhost/garageback/API/vehicules.php?";
        let lienObject = {kilometremin:filtres.kilometrage[0], 
                        kilometremax:filtres.kilometrage[1],
                        prixmin:filtres.prix[0],
                        prixmax:filtres.prix[1], 
                        anneemin:filtres.annee[0],
                        anneemax:filtres.annee[1],

                      
                      };
        if(filtres.marque.lenght != 0){

          lienObject.marque = filtres.marque;
        }

          for(const [cle, valeur] of Object.entries(lienObject)){
            lienTmp = lienTmp + `${cle}=`${}
          }
  }

  useEffect(() => {
    fetch(//fetch effectue une requête http, si reponse, elle sera encapsulé dans une promesse
      "http://localhost/GarageBack/API/vehicule.php?kilometremin=0&kilometremax=200000&anneemin=2000&anneemax=2023&prixmin=0&prixmax=50000"
    )
    //Si reponse reçu de la requête http, then va gére la reponse de cette promesse et va prendre une fonction de rappel en argument:
      .then((res) => res.json())// Va extraire les données de l'API sous format json
      .then((data) => console.log(data))//data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, []);

  const annee = getCurrentYear();


  return (
    <>
      <div className="search-filters">
        <h2>Recherche par filtres</h2>
        <div className="checkbox-filter">
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Utilitaire"
            name="famille"
            value="utilitaire"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="berline"
            name="famille"
            value="berline"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="familiale"
            name="famille"
            value="familiale"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="citadine"
            name="famille"
            value="citadine"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="SUV"
            name="famille"
            value="SUV"
          />
        </div>

        <div className="filter-row">
          <BasicSelect
            label="Marque:"
            name="marque"
            handleChange={handleChange}
            options={[
              { value: "", text: "toutes" },
              { value: "citroen", text: "citroen" },
              { value: "peugeot", text: "peugeot" },
              { value: "kia", text: "kia" },
              { value: "BMW", text: "BMW" },
            ]}
          />
        </div>


        <div className="filter-row">
          <BasicRange
            handleChange={handleChange}
            label="prix :"
            name="prix"
            marks={[
              { value: 5000, label: "5 000 €" },
              { value: 50000, label: "50 000 €" },
            ]} //En variable pour les props, mettre une accolable
            range={[5000, 50000]}
          />
        </div>

        <div className="filter-row">
          <BasicRange
            handleChange={handleChange}
            label="Année :"
            name="annee"
            marks={[
              { value: 2000, label: "2000 " },
              { value: annee, label: `${annee}` },
            ]} //En variable pour les props, mettre une accolable
            range={[2000, annee]}
          />
        </div>

        <div className="filter-row">
          <BasicRange
            handleChange={handleChange}
            label="Kilométrage :"
            name="kilometrage"
            marks={[
              { value: 0, label: "0 km" },
              { value: 200000, label: "200 000 km" },
            ]} //En variable pour les props, mettre une accolable
            range={[0, 200000]}
          />
        </div>

        <button onClick={handleClick}>Rechercher</button>
      </div>
    </>


  );
};

export default VehiculeFilters;
