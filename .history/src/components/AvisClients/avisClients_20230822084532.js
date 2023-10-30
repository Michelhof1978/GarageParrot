import React, { useState } from 'react';
import axios from 'axios';

const AvisClients = () => {
  const [avis, setAvis] = useState('');
  const [note, setNote] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/chemin/vers/votre-script.php', {
        avis,
        note,
      });

      // Réinitialisez les champs après avoir soumis l'avis
      setAvis('');
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
          <textarea
            value={avis}
            onChange={(e) => setAvis(e.target.value)}
            placeholder="Saisissez votre avis ici..."
            required
          />
        </div>
        <div>
          <select value={note} onChange={(e) => setNote(parseInt(e.target.value))}>
            {/* ... options de notation ... */}
          </select>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AvisClients;
