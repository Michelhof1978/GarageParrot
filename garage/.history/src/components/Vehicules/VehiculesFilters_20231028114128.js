// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import VehiculesCard from "./VehiculesCard";
// import TitreH1 from "../UI/Titres/TitreH1";
// import TitreH2 from "../UI/Titres/TitreH2";
// import BasicCheckbox from "../Filters/BasicCheckbox";
// import BasicSelect from "../Filters/BasicSelect";
// import BasicRange from "../Filters/BasicRange";
// import BannerInfo from "../UI/Banner/BannerInfo";
// import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
// import logoVoiture from "../../assets/images/logoVoiture.webp";
// import Card from "./Card";
// import { Pagination } from "react-bootstrap";
// import SearchButton from "../UI/Button/SearchButton";

// const VehiculesFilters = ({ onSearch }) => {
//   const getCurrentYear = () => {
//     const dateActuelle = new Date();
//     const anneeActuelle = dateActuelle.getFullYear();
//     return anneeActuelle;
//   };

//   const [filtres, setFiltres] = useState({
//     famille: [],
//     marque: "",
//     prix: [5000, 50000],
//     kilometrage: [0, 200000],
//     annee: [2000, getCurrentYear()],
//   });

//   const [lien, setLien] = useState("http://localhost/garageback/API/vehicules.php");
//   const [cards, setCards] = useState([]);

//   const handleChange = (name, newValue) => {
//     setFiltres({ ...filtres, [name]: newValue });
//   };

//   const handleCheckBoxChange = (e) => {
//     const { name, value, checked } = e.target;
//     if (checked) {
//       setFiltres({ ...filtres, [name]: [...filtres.famille, value] });
//     } else {
//       setFiltres({
//         ...filtres,
//         [name]: filtres.famille.filter((ele) => ele !== value),
//       });
//     }
//   };

//   const handleClick = () => {
//     let lienTmp = "http://localhost/garageback/API/vehicules.php";
//     let lienObject = {
//       kilometremin: filtres.kilometrage[0],
//       kilometremax: filtres.kilometrage[1],
//       prixmin: filtres.prix[0],
//       prixmax: filtres.prix[1],
//       anneemin: filtres.annee[0],
//       anneemax: filtres.annee[1],
//     };
//     if (filtres.marque.length !== 0) {
//       lienObject.marque = filtres.marque;
//     }
//     if (filtres.famille.length !== 0) {
//       lienObject.famille = filtres.famille.join(",");
//     }
//     for (const [cle, valeur] of Object.entries(lienObject)) {
//       lienTmp = lienTmp + `${cle}=${valeur}&`;
//     }
//     lienTmp = lienTmp.slice(0, -1);
//     setLien(lienTmp);
//   };

//   useEffect(() => {
//     axios.get(lien)
//       .then((res) => res.data)
//       .then((data) => {
//         setCards(data);
//       })
//       .catch((err) => console.log(err));
//   }, [lien]);

//   const annee = getCurrentYear();

//   // Ajout de la pagination
//   const cardsPerPage = 12; // Nombre de cartes par page
//   const [currentPage, setCurrentPage] = useState(1);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Calcul des cartes à afficher sur la page actuelle
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

//   return (
//     <>
//       <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />
//       <div className="search-filters">
//         <TitreH1>Veuillez faire votre sélection</TitreH1>
//         <div className="checkbox-filter mb-3">
//           <BasicCheckbox
//             handleCheckBoxChange={handleCheckBoxChange}
//             label="Utilitaire"
//             name="famille"
//             value="Utilitaire"
          
//           />
//           <BasicCheckbox
//             handleCheckBoxChange={handleCheckBoxChange}
//             label="Berline"
//             name="famille"
//             value="Berline"
         
//           />
//           <BasicCheckbox
//             handleCheckBoxChange={handleCheckBoxChange}
//             label="Familiale"
//             name="famille"
//             value="Familiale"
            
//           />
//           <BasicCheckbox
//             handleCheckBoxChange={handleCheckBoxChange}
//             label="Citadine"
//             name="famille"
//             value="Citadine"
//           />
//           <BasicCheckbox
//             handleCheckBoxChange={handleCheckBoxChange}
//             label="Suv"
//             name="famille"
//             value="SUV"
           
//           />
//         </div>

//         <div className="filter-row">
//           <BasicSelect
//             label="Marque:"
//             name="marque"
//             handleChange={handleChange}
//             options={[
//               { value: "", text: "Toutes" },
//               { value: "citroen", text: "Citroen" },
//               { value: "peugeot", text: "Peugeot" },
//               { value: "kia", text: "Kia" },
//               { value: "BMW", text: "Bmw" },
//             ]}
//           />
//         </div>

//         <div className="filter-row">
//           <BasicRange
//             handleChange={handleChange}
//             label="Prix :"
//             name="prix"
//             marks={[
//               { value: 5000, label: "5 000 €" },
//               { value: 50000, label: "50 000 €" },
//             ]}
//             range={[5000, 50000]}
//           />
//         </div>

//         <div className="filter-row">
//           <BasicRange
//             handleChange={handleChange}
//             label="Année :"
//             name="annee"
//             marks={[
//               { value: 2000, label: "2000 " },
//               { value: annee, label: `${annee}` },
//             ]}
//             range={[2000, annee]}
//           />
//         </div>

//         <div className="filter-row">
//           <BasicRange
//             handleChange={handleChange}
//             label="Kilométrage :"
//             name="kilometrage"
//             marks={[
//               { value: 0, label: "0 km" },
//               { value: 200000, label: "200 000 km" },
//             ]}
//             range={[0, 200000]}
//           />
//         </div>

//         <button onClick={handleClick}>Rechercher</button>
//         {/* <SearchButton onClick={handleClick}>Rechercher</SearchButton> */}

//         <div>
//         <TitreH2>Résultat De La Recherche</TitreH2>
//           <div className="row">
//             {currentCards.map((vehicule) => (
//               <div
//                 key={vehicule.idVehicule}
//                 className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3"
//               >
//                 <Card
//                   image={vehicule.imageVoiture}
//                   marque={vehicule.marque}
//                   nom={vehicule.nom}
//                   modele={vehicule.modele}
//                   energie={vehicule.energie}
//                   prix={vehicule.prix}
//                   id={vehicule.idVehicule}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="pagination-container">
//             <Pagination>
//               {Array.from(
//                 { length: Math.ceil(cards.length / cardsPerPage) },
//                 (_, index) => (
//                   <Pagination.Item
//                     key={index}
//                     active={index + 1 === currentPage}
//                     onClick={() => paginate(index + 1)}
//                   >
//                     {index + 1}
//                   </Pagination.Item>
//                 )
//               )}
//             </Pagination>
//           </div>
//         </div>
//       </div>
//       <BannerInfo imageUrl={logoVoiture} altText="logos marques voitures" />
//     </>
//   );
// };

// export default VehiculesFilters;


import React, { useState, useEffect } from "react";
import axios from "axios";
import VehiculesCard from "./VehiculesCard";
import TitreH1 from "../UI/Titres/TitreH1";
import TitreH2 from "../UI/Titres/TitreH2";
import BasicCheckbox from "../Filters/BasicCheckbox";
import BasicSelect from "../Filters/BasicSelect";
import BasicRange from "../Filters/BasicRange";
import BannerInfo from "../UI/Banner/BannerInfo";
import BannerInfo1 from "../../assets/images/bannerInfo1.webp";
import logoVoiture from "../../assets/images/logoVoiture.webp";
import Card from "./Card";
import { Pagination } from "react-bootstrap";
import SearchButton from "../UI/Button/SearchButton";

const VehiculesFilters = ({ onSearch }) => {
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
    const lienObject = {
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
      <BannerInfo imageUrl={BannerInfo1} altText="Banner offre" />

      <div className="search-filters">
        <TitreH1>Veuillez faire votre sélection</TitreH1>
        <div className="checkbox-filter">
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="Utilitaire"
            name="famille"
            value="Utilitaire"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="berline"
            name="famille"
            value="Berline"
          />
          <BasicCheckbox
            handleCheckBoxChange={handleCheckBoxChange}
            label="familiale"
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

        <button onClick={handleClick}>Rechercher</button>

        <div>
          <TitreH2>Résultat De La Recherche</TitreH2>
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
      </div>
    </>
  );
};

export default VehiculesFilters;
