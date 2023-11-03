for (let i = 0; i <= 4; i++) {
  etoileNote.push(
    <EtoileNotation
      key={i}
      numero={i}
      selected={i <= note}
      onEtoileClick={this.handleNoteChange}
    />
  );
}

return (
  <>
    <BannerInfo imageUrl={BannerPromoEntretien} altText="Promotion pneus" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <TitreH2>Laissez Un Avis !</TitreH2>

          <form>
            <div className="form-group mb-3 fw-bold">
              <label>Nom:</label>
              <input
                type="text"
                className="form-control form-control-thick mb-3 fw-bold lead"
                style={inputStyles}
                value={this.state.nom}
                onChange={this.handleNomChange}
              />
            </div>
            <div className="form-group mb-3 fw-bold lead">
              <label>Prénom:</label>
              <input
                type="text"
                className="form-control form-control-thick mb-3"
                style={inputStyles}
                value={this.state.prenom}
                onChange={this.handlePrenomChange}
              />
            </div>
            <div className="form-group mb-3 fw-bold lead">
              <label>Note:</label>
              <div className="etoiles-container">
                {etoileNote}
              </div>
            </div>
            <div className="form-group mb-3 fw-bold lead">
              <label>Commentaire:</label>
              <textarea
                className="form-control form-control-thick"
                style={inputStyles}
                value={this.state.commentaire}
                onChange={this.handleCommentaireChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={this.handleSubmit}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
    <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />
  </>
);
