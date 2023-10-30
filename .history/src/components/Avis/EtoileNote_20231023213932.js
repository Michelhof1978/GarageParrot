import React from 'react';
import "../../App.css";




const StarRating = () => {
  return (
    <div>
      {/* Bloc cliquable étoiles */}
      <div className="five-rate-active">
        <button type="button" className="rate-value-empty" aria-label="Noter 1 sur 5">
          <span aria-hidden="true">1</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 2 sur 5">
          <span aria-hidden="true">2</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 3 sur 5">
          <span aria-hidden="true">3</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 4 sur 5">
          <span aria-hidden="true">4</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 5 sur 5">
          <span aria-hidden="true">5</span>
        </button>
      </div>

      {/* Bloc cliquable étoiles larges */}
      <div className="five-rate-active larger">
        <p className="sr-only">Noté 1.3 sur 5</p>
        <button type="button" className="rate-value-full" aria-label="Noter 1 sur 5">
          <span aria-hidden="true">1</span>
        </button>
        <button type="button" className="rate-value-half" aria-label="Noter 2 sur 5">
          <span aria-hidden="true">2</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 3 sur 5">
          <span aria-hidden="true">3</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 4 sur 5">
          <span aria-hidden="true">4</span>
        </button>
        <button type="button" className="rate-value-empty" aria-label="Noter 5 sur 5">
          <span aria-hidden="true">5</span>
        </button>
      </div>

      {/* Bloc désactivé étoiles */}
      <div className="five-rate-inactive">
        <p className="sr-only">Noté 3.6 sur 5</p>
        <span className="rate-value-full">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-full">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-full">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-half">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-empty">
          <span aria-hidden="true"><!-- --></span>
        </span>
      </div>

      {/* Bloc désactivé étoiles taille réduite */}
      <div className="five-rate-inactive smaller">
        <p className="sr-only">Noté 2.3 sur 5</p>
        <span className="rate-value-full">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-full">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-half">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-empty">
          <span aria-hidden="true"><!-- --></span>
        </span>
        <span className="rate-value-empty">
          <span aria-hidden="true"><!-- --></span>
        </span>
      </div>
    </div>
  );
};

export default StarRating;


