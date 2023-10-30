import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import './App.css';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage
import RedirectToLogin from './RedirectToLogin'; // Import composant du bouton de redirection

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
