import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/vehiculeCard";






//La fonction SearchFilters prend en paramètre une fonction onSearch qui sera appelée lorsque l'utilisateur clique sur le bouton "Rechercher".
La fonction useState est utilisée pour stocker les filtres de l'utilisateur. Les filtres sont les suivants :
famille : une liste des familles de voitures que l'utilisateur souhaite inclure dans la recherche.
marque : la marque de la voiture que l'utilisateur souhaite rechercher.
anneeMin : l'année de construction minimale de la voiture que l'utilisateur souhaite rechercher.
anneeMax : l'année de construction maximale de la voiture que l'utilisateur souhaite rechercher.
prixMin : le prix minimum de la voiture que l'utilisateur souhaite rechercher.
prixMax : le prix maximum de la voiture que l'utilisateur souhaite rechercher.
kilometrageMin : le kilométrage minimum de la voiture que l'utilisateur souhaite rechercher.
kilometrageMax : le kilométrage maximum de la voiture que l'utilisateur souhaite rechercher.
La fonction handleInputChange est appelée lorsque l'utilisateur modifie un filtre. Elle met à jour le filtre correspondant dans l'état.
La fonction handleMouseMove est appelée lorsque l'utilisateur passe sa souris sur un curseur de plage. Elle calcule la nouvelle valeur du filtre correspondant et met à jour l'état.
La fonction handleFamilleChange est appelée lorsque l'utilisateur coche ou décoche une case à cocher dans la section "Famille". Elle met à jour la liste des familles de voitures incluses dans la recherche.
La fonction getDisplayedResults renvoie les résultats de la recherche, en tenant compte des filtres de l'utilisateur.
La fonction renderSearchResults affiche les résultats de la recherche.