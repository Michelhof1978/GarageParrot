import React, { useState } from 'react';

const EtoileBouton = ({ onClick, isActive }) => {
  return (
    <span className={`etoile ${isActive ? 'active' : ''}`} onClick={onClick}>
      &#9733
    </span>
  );
};

export default EtoileBouton;
