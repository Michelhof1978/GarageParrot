import React, { useState } from 'react';
import axios from 'axios';

const AvisClients = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [contenu, setContenu] = useState('');
  const [note, setNote] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/chemin/vers/votre-script.php', {
        nom,
        prenom,
        contenu,
        note,
      });

      // Réinitialisez les champs après avoir soumis l'avis
      setNom('');
      setPrenom('');
      setContenu('');
      setNote(0);

      // Affichez un message de succès ou effectuez d'autres actions nécessaires
      console.log(response.data.message);
    } catch (error) {
      console.error('Erreur lors de la soumission de l\'avis', error);
    }
  };

  return (
    <div>
      <h2>Laissez votre avis</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom"
            required
          />
        </div>
        <div>
          <textarea
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            placeholder="Saisissez votre avis ici..."
            required
          />
        </div>
        <div>
          <select value={note} onChange={(e) => setNote(parseInt(e.target.value))}>
            <option value={0}>Choisissez une note</option>
            <option value={1}>1 étoile</option>
            <option value={2}>2 étoiles</option>
            <option value={3}>3 étoiles</option>
            <option value={4}>4 étoiles</option>
            <option value={5}>5 étoiles</option>
          </select>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AvisClients;
