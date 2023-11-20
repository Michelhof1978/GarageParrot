import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Vehicules/Card";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import BasicCheckbox from "../../components/Filters/BasicCheckbox";
import BasicSelect from "../../components/Filters/BasicSelect";
import BasicRange from "../../components/Filters/BasicRange";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import { Pagination } from "react-bootstrap";
impoo

const VehiculesFilters = ({ onSearch, vehicules }) => {
  const getCurrentYear = () => {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    return anneeActuelle;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = vehicules ? vehicules.slice(indexOfFirstCard, indexOfLastCard) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
    fetch(lien)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, [lien]);

  const annee = getCurrentYear();

  return (
    <>
      <div className="container">
        <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

        <Textes>
          Faites confiance au Garage Parrot pour des réparations de qualité, des tarifs abordables et des voitures d'occasion qui répondent aux normes les plus strictes. Avec notre garantie d'un an, vous savez que vous faites un choix judicieux. Rejoignez notre famille de clients satisfaits dès aujourd'hui. Garantie d'un An : Votre tranquillité d'esprit est notre priorité. C'est pourquoi nous offrons une garantie d'un an sur tous nos véhicules d'occasion. Nous croyons en la qualité de nos voitures, et nous sommes prêts à le prouver. En cas de problème, nous sommes là pour vous.
        </Textes>

        <div className="search-filters">
          <TitreH1>Veuillez faire votre sélection</TitreH1>

          <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
            <div className="mb-3 ms-4">
              <BasicCheckbox
                handleCheckBoxChange={handleCheckBoxChange}
                label="Utilitaire"
                name="famille"
                value="Utilitaire"
              />
            </div>

            <div className="mb-3 ms-4">
              <BasicCheckbox
                handleCheckBoxChange={handleCheckBoxChange}
                label="Berline"
                name="famille"
                value="Berline"
              />
            </div>

            <div className="mb-3 ms-4">
              <BasicCheckbox
                handleCheckBoxChange={handleCheckBoxChange}
                label="Familiale"
                name="famille"
                value="Familiale"
              />
            </div>

            <div className="mb-3 ms-4">
              <BasicCheckbox
                handleCheckBoxChange={handleCheckBoxChange}
                label="Citadine"
                name="famille"
                value="Citadine"
              />
            </div>

            <div className="mb-3 ms-4">
              <BasicCheckbox
                handleCheckBoxChange={handleCheckBoxChange}
                label="SUV"
                name="famille"
                value="SUV"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center ms-5 mb-3">
            <div className="filter-row">
              <BasicSelect
                label="Marque :&nbsp; "
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
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
          </div>

          <div className="d-flex justify-content-center align-items-center">
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
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-5">
          <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
            Rechercher
          </button>
        </div>
      </div>

      <TitreH2>Résultats de la recherche</TitreH2>

      <div className="row">
        {currentCards.map((vehicule) => (
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
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination>
          {Array.from(
            { length: Math.ceil(vehicules.length / cardsPerPage) },
            (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </>
  );
};

export default VehiculesFilters;
