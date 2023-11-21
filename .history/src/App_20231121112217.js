import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";// Bibliothèque Icones

library.add(fab);//Ajoute les icônes de marques (brands) à la bibliothèque FontAwesome


function App() {
  return (
    <div>
  //Enveloppe le composant Site avec le BrowserRouter. Cela permet à l'application d'utiliser le système de routage fourni par react-router-dom
      <BrowserRouter>
        < Site />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
