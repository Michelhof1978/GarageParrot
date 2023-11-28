import React from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import VehiculeFiche from "./VehiculeFiche";
import VehiculesFilters from "../../containers/Site/VehiculesFilters";
import Contact from "../../containers/Site/Contact";
import Prestation from "./Prestation";
import PrestationFiche from "./PrestationFiche";
import AvisClients from "../../containers/Site/AvisClients";
import Accueil from "./Accueil";
import error from "../../components/Error/Error";

const Site = () => {
  return (
    <>
      <div className="site">
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/voitureoccasion" element={<VehiculesFilters />} />
          <Route path="/vehiculefiche/:id" element={<VehiculeFiche />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/prestationfiche/:id" element={<PrestationFiche />} />
          <Route path="/avisclients/" element={<AvisClients />} />
          <Route path="*" element={<Error>La page n'existe pas</Error>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default Site;
