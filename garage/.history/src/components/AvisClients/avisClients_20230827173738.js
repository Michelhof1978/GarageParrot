// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AvisClients = () => {
//   const [nom, setNom] = useState('');
//   const [prenom, setPrenom] = useState('');
//   const [contenu, setContenu] = useState('');
//   const [note, setNote] = useState(0);
//   const [avisList, setAvisList] = useState([]);

//   useEffect(() => {
//     // Charger les avis depuis la base de données
//     chargerAvis();
//   }, []);

//   const chargerAvis = async () => {
//     try {
//       const response = await axios.get('/chemin/vers/votre-script.php');
//       setAvisList(response.data);
//     } catch (error) {
//       console.error('Erreur lors du chargement des avis', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/chemin/vers/votre-script.php', {
//         nom,
//         prenom,
//         contenu,
//         note,
//       });

//       // Réinitialisez les champs après avoir soumis l'avis
//       setNom('');
//       setPrenom('');
//       setContenu('');
//       setNote(0);

//       // Rafraîchir la liste des avis
//       chargerAvis();

//       // Affichez un message de succès ou effectuez d'autres actions nécessaires
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Erreur lors de la soumission de l\'avis', error);
//     }
//   };

//   const renderEtoiles = (maxEtoiles) => {
//     const etoiles = [];
//     for (let i = 1; i <= maxEtoiles; i++) {
//       etoiles.push(
//         <span
//           key={i}
//           className={`etoile ${i <= note ? 'active' : ''}`}
//           onClick={() => setNote(i)}
//         >
//           ★
//         </span>
//       );
//     }
//     return etoiles;
//   };

//   return (
//     <div>
//       <h2>Laissez votre avis</h2>
//       {/* ... Formulaire d'avis ... */}
//       <h2>Avis Clients</h2>
//       <ul>
//         {avisList.map((avis, index) => (
//           <li key={index}>
//             {avis.nom} {avis.prenom} : {avis.contenu} (Note : {avis.note})
//           </li>
//         ))}
//       </ul>
//       <div>
//         <p>Votre note :</p>
//         {renderEtoiles(5)}
//       </div>
//     </div>
//   );
// };

// export default AvisClients;
