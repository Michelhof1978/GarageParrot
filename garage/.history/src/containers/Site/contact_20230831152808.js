import React, { Component} from 'react';
import TitreH1 from '../../components/UI/TitreH1/TitreH1';
import Formulaire from './Formulaire/Formulaire';

class Contact extends Component {
    render () {
        return (
            <>
            <TitreH1 bgColor="primary">Nous Contacter</TitreH1>
            <div className="container">
                <h2>Adresse : </h2>
                11 rue de la quiche 33 000 Toulouse 
                <h2>Téléphone : </h2>
                04 75 02 14 05

            </div>
            </>
        )
}
}

export default Contact;