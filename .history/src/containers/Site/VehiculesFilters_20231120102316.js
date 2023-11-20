import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import BasicCheckbox from "../../components/Filters/BasicCheckbox";
import BasicSelect from "../../components/Filters/BasicSelect";
import BasicRange from "../../components/Filters/BasicRange";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
 import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
 import logoVoiture from "../../assets/images/logoVoiture.webp";
import Card from "../../components/Vehicules/Card";
import { Link } from "react-router-dom";
import Textes from "../../components/UI/Textes/Textes";
import { Pagination } from "react-bootstrap";


//La fonction prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculesFilters = ({ onSearch }) => {
  
  //Fonction pour obtenir l'année actuelle en utilisant l'objet date.
  const getCurrentYear = () => {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    return anneeActuelle;
  };
//----------------------------------------------------------------------------------
  // State pour gérer la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = vehicules.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //----------------------------------------------------------------------------------


   // Le composant va suivre l'état local qui est filtres qui va suivre les valeurs séléctionnéées par l'utilisateur.
  const [filtres, setFiltres] = useState({
    famille: [],
    marque: "",
    prix: [5000, 50000],
    kilometrage: [0, 200000],
    annee: [2000, getCurrentYear()], // On appelle la fonction getCurrentYear() pour avoir l'année actuelle
  });


  const [lien, setLien] = useState("http://localhost/garageback/API/vehicules.php")
  const [cards, setCards] = useState([] )

  
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
  
  // const [pageNumber, setPageNumber] = useState(0);
  // const itemsPerPage = 9;
  // const pagesCount = Math.ceil(cards.length / itemsPerPage);

  // const startIndex = pageNumber * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const displayedCards = cards.slice(startIndex, endIndex);

  // const handlePageClick = (selectedPage) => {
  //   setPageNumber(selectedPage);
  // };
  const handleClick = ()=> {


        let lienTmp = "http://localhost/garageback/API/vehicules.php?";
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

<div className="container">
   <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

   <Textes>
    Faites confiance au Garage Parrot pour des réparations de qualité,
     des tarifs abordables et des voitures d'occasion qui répondent aux 
     normes les plus strictes. Avec notre garantie d'un an, vous savez 
     que vous faites un choix judicieux. Rejoignez notre famille de
      clients satisfaits dès aujourd'hui.   
      Garantie d'un An : Votre tranquillité d'esprit est notre priorité. 
      C'est pourquoi nous offrons une garantie d'un an sur tous nos véhicules 
      d'occasion. Nous croyons en la qualité de nos voitures, et nous sommes 
      prêts à le prouver. En cas de problème, nous sommes là pour vous.        
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
        <button className="btn btn-primary btn-lg btn-block " onClick={handleClick}>Rechercher</button>
        </div>
      </div>
      
      <TitreH2>Résultats de la recherche</TitreH2>
      
      <div className="row">
        {currentCards.map((vehicule) => (
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

      <div className="d-flex justify-content-center mt-4">
        
        
      </div>
    
      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />

    </>


  );
};

export default VehiculesFilters;




