import React, { useState, useEffect } from 'react';
import TitreH1 from "../../components/UI/Titres/TitreH1";
import CarousselCard from "../../components/Caroussel/Caroussel";
import peugeot208 from "../../assets/images/peugeot208.webp";
import peugeot3008 from "../../assets/images/peugeot3008.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import VehiculesCard from "../../components/Vehicules/VehiculesCard";
import AvisClientsAccueil from "../../components/Avis/AvisClientsAccueil";
import Textes from "../../components/UI/Textes/Textes";
import TitreH3 from "../../components/UI/Titres/TitreH3";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";

class Accueil extends Component {
  componentDidMount = () => {
    //Titre de la page
    document.title = "Accueil Garage Parrot";
  };

  render() {
    return (
      <>
        <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

        <div>
          <div className="container">
            <TitreH1>Bienvenue au Garage Parrot De Toulouse</TitreH1>

            <Textes>
              Les réparateurs s'occupent de la réparation et de l'entretien de
              votre voiture, peu importe la marque ou le modèle de celle-ci.
              Profitez d'une prestation de qualité effectuée par des véritables
              experts auto. Contactez-nous dès maintenant pour un devis en ligne
              pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>

            <CarousselCard />

            <TitreH3>Découvrez les dernières voitures fraîchement arrivées !</TitreH3>
           
            <Textes>
            Faites confiance au Garage Parrot pour des réparations de qualité,
             des tarifs abordables et des voitures d'occasion qui répondent aux 
             normes les plus strictes. Avec notre garantie d'un an, vous savez 
             que vous faites un choix judicieux. Rejoignez notre famille de
              clients satisfaits dès aujourd'hui.           
               </Textes>
               
            <VehiculesCard />

            <div className="container-fluid mt-3">
              <img
                className="img-fluid w-50"
                src={peugeot208}
                alt="peugeot 208"
              />
              <img
                className="img-fluid w-50"
                src={peugeot3008}
                alt="peugeot 3008"
              />
            </div>

            <AvisClientsAccueil />

            <BannerInfo
              imageUrl={logoVoiture}
              altText="logos marques voitures"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Accueil;



import React, { useState, useEffect } from 'react';
import BannerInfo1 from '../../assets/images/bannerInfo1.webp';
import logoVoiture from '../../assets/images/logoVoiture.webp';
import Card from '../../components/Vehicules/Card';
import Textes from '../../components/UI/Textes/Textes';
import PaginationComponent from '../../components/Vehicules/CardPagination/CardPagination';

const Accueil = () => {
  const [cards, setCards] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const pagesCount = Math.ceil(cards.length / itemsPerPage);
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = cards.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setPageNumber(selectedPage);
  };

  useEffect(() => {
    // Effectuer des opérations de chargement des données ici
    // Exemple fictif : fetch des données d'une API
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error(error));
  }, []); // Le tableau vide signifie que cet effet s'exécute une seule fois, équivalent à componentDidMount dans les composants de classe

  return (
    <>
      {/* Le reste du contenu du composant */}
      <Textes>
        Faites confiance au Garage Parrot pour des réparations de qualité, des
        tarifs abordables et des voitures d'occasion qui répondent aux normes
        les plus strictes. Avec notre garantie d'un an, vous savez que vous
        faites un choix judicieux. Rejoignez notre famille de clients satisfaits
        dès aujourd'hui. Garantie d'un An : Votre tranquillité d'esprit est notre
        priorité. C'est pourquoi nous offrons une garantie d'un an sur tous nos
        véhicules d'occasion. Nous croyons en la qualité de nos voitures, et
        nous sommes prêts à le prouver. En cas de problème, nous sommes là pour
        vous.
      </Textes>

      <div className="d-flex justify-content-center mt-4">
        <PaginationComponent
          currentPage={pageNumber + 1}
          totalPages={pagesCount}
          onPageChange={handlePageClick}
        />
      </div>

      {/* Affichage des cartes */}
      <div className="row">
        {displayedCards.map((vehicule) => (
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

      {/* Le reste du contenu du composant */}
    </>
  );
};

export default Accueil;
