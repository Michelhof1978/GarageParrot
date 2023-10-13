
const Card = () => {
<div key={vehicule.idVehicule} className="card">
          <div className="card-body">
            <a href={vehicule.imageVoiture.imageVoiture} target="_blank" rel="noopener noreferrer">
              <img src={vehicule.imageVoiture.imageVoiture} alt={vehicule.marque} />
            </a>

            <h5 className="card-title">{vehicule.nom}</h5>
            <p className="card-text">Modèle: {vehicule.modele} </p>
            <p className="card-text">Energie: {vehicule.energie} </p>
            <p className="card-text">Prix: {vehicule.prix} €</p>
          </div>
          <div className="card-footer">
            <Link
              to={`/vehiculedetail/${vehicule.idVehicule}`}
              className="btn btn-primary"
            >
              En savoir plus
            </Link>
          </div>
          