import React from "react";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import CardPrestation from "../../components/Prestation/CardPrestation";
import BannerPneusContinental from "../../assets/images/bannerPneusContinental.webp";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import Textes from "../../components/UI/Textes/Textes";
import BannerQuality from "../../assets/images/bannerQuality.webp";

const Prestation = (props) => (

  const [lien, setLien] = useState("http://localhost/garageback/API/vehicules.php")

  const [cards, setCards] = useState(
    []
  )




  <>
   <BannerInfo imageUrl={BannerPneusContinental} altText="Promotion pneus" />


    <div className="container">
   

        <TitreH1>
        Découvrez Les Prestations Proposées Par Nos Réparateurs
            </TitreH1>

            <Textes>
            Les réparateurs du Garage Parrot s’occupent de la réparation et l’entretien de votre voiture, peu importe la marque ou le modèle de celle-ci. Profitez d’une prestation de qualité effectuée par des véritables experts auto. Réalisez dès maintenant un devis en ligne en nous contactant via le formulaire pour la réparation de votre voiture et obtenez un RDV immédiat !
            </Textes>

            <div className="row">
        {cardprestations.map((vehicule) => (
          <div
            key={vehicule.idVehicule}
            className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3" 
          >
             <CardPrestation
              image={prestation.imageVoiture}
              nom={prestation.nom}
              prix={prestation.prix}
              id={prestation.idVehicule}
            />
           
          </div>
        ))}
      </div>

            <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
          
    </div>
   
  </>
);

export default Prestation;
