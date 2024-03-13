import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));//React est créée en utilisant ReactDOM.createRoot(). La méthode getElementById("root") récupère un élément du DOM ayant l'ID "root"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
