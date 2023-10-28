import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculesCard from "./VehiculesCard";
import TitreH1 from "../UI/Titres/TitreH1";
import BasicCheckbox from "../Filters/BasicCheckbox";
import BasicSelect from "../Filters/BasicSelect";
import BasicRange from "../Filters/BasicRange";
import BannerInfo from "../UI/Banner/BannerInfo";
 import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
 import logoVoiture from "../../assets/images/logoVoiture.webp";
import Card from "./Card";

//La fonction prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculesFilters = ({ onSearch }) => {
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

  const [cards, setCards] = useState(
    []
  )

  
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
        let lienTmp = "http://localhost/garageback/API/vehicules.php";
        let lienObject = {kilometremin:filtres.kilometrage[0], 
                        kilometremax:filtres.kilometrage[1],
                        prixmin:filtres.prix[0],
                        prixmax:filtres.prix[1], 
                        anneemin:filtres.annee[0],
                        anneemax:filtres.annee[1], 
                        
                      };
        if(filtres.marque.length !== 0){
          lienObject.marque = filtres.marque;
        }

        if(filtres.famille.length !== 0){
          lienObject.famille = filtres.famille.join(",");
        }

          for(const [cle, valeur] of Object.entries(lienObject)){
            lienTmp = lienTmp + `${cle}=${valeur}&`
          }
          lienTmp = lienTmp.slice(0, -1);
          // console.log(lienTmp)
          setLien(lienTmp)
  }

  useEffect(() => {
    fetch(//fetch effectue une requête http, si reponse, elle sera encapsulé dans une promesse
     lien // "http://localhost/GarageBack/API/vehicule.php?kilometremin=0&kilometremax=200000&anneemin=2000&anneemax=2023&prixmin=5000&prixmax=50000"
    )
    //Si reponse reçu de la requête http, then va gére la reponse de cette promesse et va prendre une fonction de rappel en argument:
      .then((res) => res.json())// Va extraire les données de l'API sous format json
      .then((data) => {
        setCards(data)
        console.log();
      })//data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, [lien]);

  const annee = getCurrentYear();


  return (
    <>
   <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <div className="search-filters">
     

        <TitreH1>Veuillez faire votre selection</TitreH1>
        <div className="checkbox-filter">
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Utilitaire"
            name="famille"
            value="utilitaire"
          />
          <BasicCheckbox
          className = "ms-2"
            handleCheckBoxChange={handleCheckBoxChange}
            label="Berline"
            name="famille"
            value="berline"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Familiale"
            name="famille"
            value="familiale"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Citadine"
            name="famille"
            value="citadine"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Suv"
            name="famille"
            value="suv"
          />
        </div>

        <div className="filter-row">
          <BasicSelect
            label="Marque:"
            name="marque"
            handleChange={handleChange}
            options={[
              { value: "", text: "Toutes" },
              { value: "citroen", text: "Citroen" },
              { value: "peugeot", text: "Peugeot" },
              { value: "kia", text: "Kia" },
              { value: "BMW", text: "Bmw" },
            ]}
          />
        </div>


        <div className="filter-row">
          <BasicRange
            handleChange={handleChange}
            label="Prix :"
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
      <div className="row">
        {cards.map((vehicule) => (
          <div
            key={vehicule.idVehicule}
            className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3" 
          >
            <Card
              image={vehicule.imageVoiture}
              marque={vehicule.marque}
              nom={vehicule.nom}
              modele={vehicule.modele}
              energie={vehicule.energie}
              prix={vehicule.prix}
              id={vehicule.idVehicule}
            />
          </div>
        ))}
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />

    </>


  );
};

export default VehiculesFilters;
