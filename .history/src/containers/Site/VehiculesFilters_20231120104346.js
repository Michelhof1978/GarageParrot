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
        {/* ... (votre contenu BannerInfo et Textes) ... */}

        <div className="search-filters">
          <TitreH1>Veuillez faire votre sélection</TitreH1>

          {/* ... (votre contenu de filtres) ... */}

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
              { length: Math.ceil(cards.length / cardsPerPage) },
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
      </div>
    </>
  );
};

export default VehiculesFilters;
