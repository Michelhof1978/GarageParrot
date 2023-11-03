import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import BasicCheckbox from "../../components/Filters/BasicCheckbox";
import BasicSelect from "../../components/Filters/BasicSelect";
import BasicRange from "../../components/Filters/BasicRange";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";

const VehiculesFilters = () => {
  const getCurrentYear = () => {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    return anneeActuelle;
  };

  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    prix: [5000, 50000],
    kilometrage: [0, 200000],
    annee: [2000, getCurrentYear()],
  });

  const [lien, setLien] = useState("http://localhost/garageback/API/vehicules.php");
  const [cards, setCards] = useState([]);
  
  const handleChange = (name, newValue) => {
    setFiltres({ ...filtres, [name]: newValue });
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

  const handleClick = () => {
    let lienTmp = "http://localhost/garageback/API/vehicules.php?";
    let lienObject = {
      kilometremin: filtres.kilometrage[0],
      kilometremax: filtres.kilometrage[1],
      prixmin: filtres.prix[0],
      prixmax: filtres.prix[1],
      anneemin: filtres.annee[0],
      anneemax: filtres.annee[1],
    };
    if (filtres.marque.length !== 0) {
      lienObject.marque = filtres.marque;
    }
    if (filtres.famille.length !== 0) {
      lienObject.famille = filtres.famille.join(",");
    }
    for (const [cle, valeur] of Object.entries(lienObject)) {
      lienTmp = lienTmp + `${cle}=${valeur}&`;
    }
    lienTmp = lienTmp.slice(0, -1);
    setLien(lienTmp);
  };

  useEffect(() => {
    axios.get(lien)
      .then((res) => res.data)
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, [lien]);

  const annee = getCurrentYear();

  return (
    <div className="container text-center">
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <TitreH1>Veuillez faire votre sélection</TitreH1>

      <div className="checkbox-filter mb-3 text-center">
        <BasicCheckbox
          handleCheckBoxChange={handleCheckBoxChange}
          label="Utilitaire"
          name="famille"
          value="Utilitaire"
        />
        <BasicCheckbox
          handleCheckBoxChange={handleCheckBoxChange}
          label="Berline"
          name="famille"
          value="Berline"
        />
        <BasicCheckbox
          handleCheckBoxChange={handleCheckBoxChange}
          label="Familiale"
          name="famille"
          value="Familiale"
        />
        <BasicCheckbox
          handleCheckBoxChange={handleCheckBoxChange}
          label="Citadine"
          name="famille"
          value="Citadine"
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
          ]}
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
          ]}
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
          ]}
          range={[0, 200000]}
        />
      </div>

      <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Rechercher</button>

      <TitreH2>Résultat De La Recherche</TitreH2>
      <div className="row">
        {cards.map((vehicule) => (
          <div key={vehicule.idVehicule} className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3">
            <Card
              image={vehicule.imageVoiture}
              marque={vehicule.marque}
              nom={vehicule.nom}
              modele={vehicule.modele}
              energie={vehicule.energie}
              prix={vehicule.prix}
              id={vehicule.idVehicule}
            />
            <div className="card-footer">
              <Link to={`/vehiculefiche/${vehicule.idVehicule}`} className="btn btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </div>
  );
};

export default VehiculesFilters;
