import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import VehiculeCard from "../Vehicules/VehiculeCard";
import TitreH1 from "../UI/TitreH1/TitreH1";



const BasicCheckbox = ({props}) =>{

    <label>
    <input
      type="checkbox"
      name={props.name}
      value={props.value}
      checked={0}
      onChange={handleFamilleChange}
    />
    {props.label }
  </label>
  

}