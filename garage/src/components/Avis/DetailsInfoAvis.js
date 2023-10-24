import React from 'react';

const DetailsInfoAvis = () => {
  return (
    <dl className="rating-scale margin-left-0" aria-label="Détails des 7 avis">
      <dt>
        <span aria-hidden="true">5</span>
        <span className="sr-only" id="dt_En6rS"> 5 étoiles sur 5</span>
      </dt>
      <dd>
        <span className="scale" role="img" aria-label="57% des utilisateurs ont noté 5 étoiles">
          <span style={{ width: '57%' }}></span>
        </span>
        <span aria-describedby="dt_En6rS">4 avis<span className="sr-only"> sur 7 exprimés</span></span>
      </dd>
      <dt>
        <span aria-hidden="true">4</span>
        <span className="sr-only" id="dt_VXjYi"> 4 étoiles sur 5</span>
      </dt>
      <dd>
        <span className="scale" role="img" aria-label="14% des utilisateurs ont noté 4 étoiles">
          <span style={{ width: '14%' }}></span>
        </span>
        <span aria-describedby="dt_VXjYi">1 avis<span className="sr-only"> sur 7 exprimés</span></span>
      </dd>
      <dt>
        <span aria-hidden="true">3</span>
        <span className="sr-only" id="dt_6Xx-c"> 3 étoiles sur 5</span>
      </dt>
      <dd>
        <span className="scale" role="img" aria-label="29% des utilisateurs ont noté 3 étoiles">
          <span style={{ width: '29%' }}></span>
        </span>
        <span aria-describedby="dt_6Xx-c">2 avis<span className="sr-only"> sur 7 exprimés</span></span>
      </dd>
      <dt aria-hidden="true">2</dt>
      <dd aria-hidden="true">
        <span className="scale"></span>
      </dd>
      <dt aria-hidden="true">1</dt>
      <dd aria-hidden="true">
        <span className="scale"></span>
      </dd>
    </dl>
  );
};

export default DetailsInfoAvis;
