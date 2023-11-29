import React, { useState, useEffect } from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import CardPrestation from "../../components/Prestation/CardPrestation";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import Textes from "../../components/UI/Textes/Textes";
import BannerQuality from "../../assets/images/bannerQuality.webp";

const Prestation = (props) => {
  useEffect(() => {
    // Titre de la page
    document.title = "Presentation des sèrvices"; //Le tableau vide signifie que cet effet ne dépend d'aucune variable et ne sera exécuté qu'une fois après le montage du composant
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost/GarageBack/API/prestation.php")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BannerInfo imageUrl={BannerPneusContinental} altText="Promotion pneus" />
      <div className="container">
        <TitreH1>
          Découvrez Les Prestations Proposées Par Nos Réparateurs
        </TitreH1>

        <Textes>
          Les réparateurs du Garage Parrot s'occupent de la réparation et de
          l'entretien de votre voiture, peu importe la marque ou le modèle de
          celle-ci. Profitez d'une prestation de qualité effectuée par des
          véritables experts auto. Réalisez dès maintenant un devis en ligne en
          nous contactant via le formulaire pour la réparation de votre voiture
          et obtenez un RDV immédiat !
        </Textes>
        <div className="row">
          {cards.map((prestation) => (
            <div
              key={prestation.idPrestation}
              className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3"
            >
              <CardPrestation
                image={prestation.imagePrestation}
                nom={prestation.nom}
                description={prestation.description}
                prix={prestation.prix}
                id={prestation.idPrestation}
              />
            </div>
          ))}
        </div>
        <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
      </div>
    </>
  );
};

export default Prestation;
