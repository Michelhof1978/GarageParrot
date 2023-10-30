import React from "react";

const Etoile = ({ selected, onSelect }) => (
  <span
    className={`etoile ${selected ? "etoile-selected" : ""}`}
    onClick={onSelect}
  >
    ★
  </span>
);

export default Etoile;
