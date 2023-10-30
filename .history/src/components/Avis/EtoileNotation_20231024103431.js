import React from 'react';
import "../../App.css";
import EtoileBouton from './EtoileBouton';

const EtoileNotation = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <EtoileBouton isActive={true} /> {/* La première étoile est active */}
        <EtoileBouton isActive={true} /> {/* La deuxième étoile est active */}
        <EtoileBouton isActive={true} /> {/* La troisième étoile est active */}
        <EtoileBouton isActive={true} /> {/* La quatrième étoile est active */}
        <EtoileBouton isActive={true} /> {/* La cinquième étoile est active */}
      </div>
    </div>
  );
};

export default EtoileNotation;
