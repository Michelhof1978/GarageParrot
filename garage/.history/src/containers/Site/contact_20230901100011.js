import React, { Component} from 'react';
import TitreH1 from '../../components/UI/TitreH1/TitreH1';
import Form from './Formulaire/Formulaire';

class Contact extends Component {
        // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Page de contact";
        };
        ha
    render () {
        return (
            <>
            <TitreH1 bgColor="primary">Nous Contacter</TitreH1>
            <div className="container">
                <h2>Adresse : </h2>
                11 rue de la quiche 33 000 Toulouse 
                <h2>Téléphone : </h2>
                04 75 02 14 05
                <h2>Nous écrire </h2>
                <Form />

            </div>
            </>
        )
}
}

export default Contact;