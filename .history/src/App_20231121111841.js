import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage
import { library } from "@fortawesome/fontawesome-svg-core";//I
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);


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
