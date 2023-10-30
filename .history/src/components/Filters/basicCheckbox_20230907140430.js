import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";



const BasicCheckbox = ({props}) =>{

    <label>
    <input
      type="checkbox"
      name="famille"
      value="utilitaire"
      checked={filtres.famille.includes("utilitaire")}
      onChange={handleFamilleChange}
    />
    {props.label props.value}
  </label>
  

}