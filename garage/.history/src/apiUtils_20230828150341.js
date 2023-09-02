// apiUtils.js

export function generateURL(filtres = null) {
    if (!filtres) {
      return "http://localhost/garageback/front/voiturefiche/all";
    }
  
    return `http://localhost/garageback/front/voiturefiche/all/?marque=${filtres.marque}&anneeMin=${filtres.anneeMin}&anneeMax=${filtres.anneeMax}&famille=${filtres.famille.join(",")}&prixMin=${filtres.prixMin}&prixMax=${filtres.prixMax}&kilometrageMin=${filtres.kilometrageMin}&kilometrageMax=${filtres.kilometrageMax}`;
  }
  