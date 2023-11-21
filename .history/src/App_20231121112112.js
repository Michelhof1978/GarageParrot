import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";// Bibliothèque Icones

library.add(fab);////Ajoute les icônes de marques (brands) à la bibliothèque FontAwesome


function App() {
  return (
    <div>
      <BrowserRouter>
        < Site />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
