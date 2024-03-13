import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
render de la racine pour rendre le composant principal de l'application (<App />) dans l'élément associé à la racine. Le <React.StrictMode> est une fonctionnalité de React qui aide à détecter les problèmes potentiels dans le code de l'application. Elle est utilisée ici comme un conteneur autour du composant principal.