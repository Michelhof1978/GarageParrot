import React, { useState, useEffect } from "react";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import TitreH2 from "../../components/UI/Titres/TitreH2";
import BasicCheckbox from "../../components/Filters/BasicCheckbox";
import BasicSelect from "../../components/Filters/BasicSelect";
import BasicRange from "../../components/Filters/BasicRange";
import BannerInfo from "../../components/UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import Card from "../../components/Vehicules/Card";
import Textes from "../../components/UI/Textes/Textes";
import PaginationComponent from "../../components/Vehicules/CardPagination/CardPagination";



//La fonction prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
const VehiculesFilters = ({ onSearch }) => {

  useEffect(() => {
    document.title = "Recherche Voitures d'Occasion";
  }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune variable et ne sera exécuté qu'une fois après le montage du composant
  

  //Fonction pour obtenir l'année actuelle en utilisant l'objet date pour le composant BASICRANGE.
    const getCurrentYear = () => {
    const dateActuelle = new Date(); // crée une nouvelle instance de l'objet Date, qui représente la date et l'heure actuelles.
    const anneeActuelle = dateActuelle.getFullYear();// crée une nouvelle instance de l'objet Date, qui représente la date et l'heure actuelles.
    return anneeActuelle;
  };

//hook useState de React pour déclarer et initialiser un état local dans le composant fonctionnel.  const [filtres, setFiltres] = useState({
  const [filtres, setFiltres] = useState({//déstructuration du tableau retourné par useState
    famille: [],
    marque: "",
    prix: [5000, 50000],
    kilometrage: [0, 200000],
    annee: [2000, getCurrentYear()], // On appelle la fonction getCurrentYear() pour avoir l'année actuelle
  });

  const [lien, setLien] = useState(
    "http://localhost/garageback/API/vehicules.php"
  );
  const [cards, setCards] = useState([]);

  //Impossible de communiquer directement entre parents et fils, on utilisera donc la 
  //fonction handlechange pour le faire, il sera passer en props pour chaque composant fils
  const handleChange = (name, newValue) => {//mettre à jour l'état global (filtres) en React en modifiant la valeur associée à un filtre spécifique

 //prendra 2 paramètres name (le nom du filtre à mettre à jour et newValue, la nouvelle valeur du filtre.
    setFiltres({ ...filtres, [name]: newValue }); 
   
  };

//---------------------------CHECKBOX
//fonction utilisée pour gérer le changement d'état de la checkbox dans une interface
//  utilisateur. Elle prend en paramètre un événement (e) généré par le changement d'état
//   de la case à cocher.
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

  //PAGINATION ---------------------------------------------------------
  //nombre de cartes par page, gère la pagination d'une liste d'éléments (cards) 
  const [pageNumber, setPageNumber] = useState(0);

  //Définition du nombre d'éléments par page
  const itemsPerPage = 6;

  //Calcule le nombre total de page nécéssaire pour pouvoir afficher tous le éléments
  const pagesCount = Math.ceil(cards.length / itemsPerPage);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCards = cards.slice(startIndex, endIndex);


  const handlePageClick = (selectedPage) => {
    setPageNumber(selectedPage);
  };
//PAGINATION ---------------------------------------------------------

  const handleClick = () => {
    let lienTmp = "http://localhost/garageback/API/vehicules.php?";

  //Création d'un objet qui contiendra les paramètres de l'Url à construire
    let lienObject = {
      //Propriétés de l'objet qui seront extraites des valeurs actuelles de filtres
      //[0] et [1] Va extraire les valeurs du premier élément  minimum qui est 0 et 
      //le 2 ème élément maximum qui sera 1
      kilometremin: filtres.kilometrage[0],
      kilometremax: filtres.kilometrage[1],
      prixmin: filtres.prix[0],
      prixmax: filtres.prix[1],
      anneemin: filtres.annee[0],
      anneemax: filtres.annee[1],
    };
// Si la longueur du tableau filtres.marque n'est pas égale à zéro (c'est-à-dire s'il 
//y a une marque sélectionnée), alors la propriété marque est ajoutée à l'objet lienObject.
    if (filtres.marque.length !== 0) {
      lienObject.marque = filtres.marque;
    }

//condition qui teste si la longueur du tableau filtres.famille est différente de zéro. 
//En d'autres termes, elle vérifie si le tableau filtres.famille n'est pas vide.
//Si la condition dans le if est vraie, cela signifie que le tableau filtres.famille 
// contient des éléments. Dans ce cas, la propriété famille de l'objet lienObject est 
// mise à jour en utilisant la méthode join(","). Cette méthode crée une chaîne de 
// caractères en joignant tous les éléments du tableau avec une virgule comme séparateur.
if (filtres.famille.length !== 0) {
      lienObject.famille = filtres.famille.join(",");
    }

//  Boucle for...of qui itère sur les paires clé-valeur de l'objet lienObject. À chaque
//  itération, une chaîne de requête est construite en ajoutant chaque paire clé-valeur à
//   la variable lienTmp
//Va construire la chaine de la reqête = http://localhost/garageback/API/vehicules.php?kilometremin=5000&kilometremax=20000&prixmin=10000&prixmax=50000&anneemin=2010&anneemax=2022&marque=Toyota&famille=SUV,Berline
// clé = kilometremin et valeur = 5000
//la chaîne de requête, et les paires sont séparées par &. Le dernier & est ensuite supprimé pour obtenir une URL bien formée
    for (const [cle, valeur] of Object.entries(lienObject)) {
      lienTmp = lienTmp + `${cle}=${valeur}&`;
    }

    //Une fois que la boucle est terminée, cette ligne supprime le dernier caractère 
    //(&) de la chaîne de requête, car il n'est pas nécessaire à la fin.
    lienTmp = lienTmp.slice(0, -1);
    // console.log(lienTmp)
    setLien(lienTmp);
  };

  useEffect(() => {
    fetch(
      //fetch effectue une requête http, si reponse, elle sera encapsulé dans une promesse
      lien // "http://localhost/GarageBack/API/vehicule.php?kilometremin=0&kilometremax=200000&anneemin=2000&anneemax=2023&prixmin=5000&prixmax=50000"
    )//test sur POSTMAN en insérant l'url en combinant les filtres et le resultat est 1 donc ok
      //Si reponse reçu de la requête http, then va gére la reponse de cette promesse et va prendre une fonction de rappel en argument:
      .then((res) => res.json()) // Va extraire les données de l'API sous format json
      .then((data) => {
        setCards(data);
        console.log();
      }) //data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err)); //Si erreur de la requête, catch retourne une erreur
  }, [lien]);


  //Mise à jour date actuelle composant BASICRANGE
  const annee = getCurrentYear();

  return (
    <>
      <div className="container">
        <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

        <Textes>
          Faites confiance au Garage Parrot pour des réparations de qualité, des
          tarifs abordables et des voitures d'occasion qui répondent aux normes
          les plus strictes. Avec notre garantie d'un an, vous savez que vous
          faites un choix judicieux. Rejoignez notre famille de clients
          satisfaits dès aujourd'hui. Garantie d'un An : Votre tranquillité
          d'esprit est notre priorité. C'est pourquoi nous offrons une garantie
          d'un an sur tous nos véhicules d'occasion. Nous croyons en la qualité
          de nos voitures, et nous sommes prêts à le prouver. En cas de
          problème, nous sommes là pour vous.
        </Textes>

        <div className="search-filters">
          <TitreH1>Veuillez faire votre sélection</TitreH1>

          {/* BASICCHECKBOX------------------------------------------------------------        */}
          <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
            <div className="mb-3 ms-4">
              <BasicCheckbox

          //Elle est destinée à être utilisée comme une fonction de rappel
          //  (handleCheckBoxChange) qui sera exécutée lorsque l'état de la case à cocher
          //   change. Cette fonction gère généralement la mise à jour de l'état dans le
          //    composant parent.
                handleCheckBoxChange={handleCheckBoxChange}// Propriété passée au composant
                label="Utilitaire"
                name="famille"
                value="Utilitaire"
                className="me-"
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
          {/* FIN BASICCHECKBOX------------------------------------------------------------ */}

          {/* BASICSELECT------------------------------------------------------------ */}
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
          {/* FIN BASICSELECT------------------------------------------------------------ */}

          {/* BASICRANGE------------------------------------------------------------ */}
          {/* //PLAGE DE PRIX------------------------------- */}
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

{/* //PLAGE DE ANNEE------------------------------- */}
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
          {/*FIN BASICSELECT------------------------------------------------------------ */}
        </div>
        {/* BOUTON FILTRE------------------------------------------------------------ */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <button
            className="btn btn-primary btn-lg btn-block "
            onClick={handleClick}
          >
            Rechercher
          </button>
        </div>
        {/* FIN BOUTON FILTRE------------------------------------------------------------ */}
      </div>

      <TitreH2>Résultats de la recherche</TitreH2>

      <div className="row">
        {/* Fonction map qui va itérer sur chaque élément du tableau 'card' et execute une fonction pour chaque élément. La fonction prend en paramétre chaque élément du tableau 'vehicule' et va retourner quelque chose. */}
        {cards && cards.length > 0 ? (
         displayedCards.map((vehicule) => (
            // {/* key =  aide à identifier de manière unique chaque élément généré dynamiquement au sein d'une liste*/}
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
          ))
        ) : (
          <p className="text-center lead fw-bold mt-4 display-4">
            Aucune voiture dans les résultats
          </p>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <PaginationComponent
          currentPage={pageNumber + 1}
          totalPages={pagesCount}
          onPageChange={handlePageClick}
        />
      </div>

      <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
    </>
  );
};

export default VehiculesFilters;
