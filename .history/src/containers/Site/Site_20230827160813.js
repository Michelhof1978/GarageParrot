import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import SearchFilters from "../../components/Vehicules/SearchFilters";
import VehiculeDetails from "../../Vehicules/VehiculeDetails";

class Site extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/parebrise" element={<h1>PareBrise</h1>} />
          <Route path="/vidange" element={<h1>Vidange</h1>} />
          <Route path="/voitureoccasion" element={<SearchFilters/>} />
          <Route path="/voituredetails/:id" element={<VehiculeDetails />} />
        </Routes>
      </div>
    );
  }
}

export default Site;
