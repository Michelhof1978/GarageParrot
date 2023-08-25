// src/App.js
import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, NumberField, DateField, DecimalField, ImageField, LongTextField } from 'react-admin';
import dataProvider from './dataProvider';

const VehicleList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="famille" label="Famille" />
      <TextField source="marque" label="Marque" />
      <TextField source="modele" label="Modèle" />
      <NumberField source="annee" label="Année" />
      <NumberField source="kilometrage" label="Kilométrage" />
      <TextField source="boitevitesse" label="Boite de vitesse" />
      <TextField source="energie" label="Énergie" />
      <DateField source="datecirculation" label="Date de circulation" />
      <TextField source="puissance" label="Puissance" />
      <NumberField source="places" label="Places" />
      <TextField source="couleur" label="Couleur" />
      <TextField source="reference" label="Référence" />
      <DecimalField source="prix" label="Prix" />
      <ImageField source="imagevoiture" label="Image de voiture" />
      <ImageField source="imagecritere" label="Image de critère" />
      <LongTextField source="description" label="Description" />
    </Datagrid>
  </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="vehicles" list={VehicleList} />
  </Admin>
);

export default App;
