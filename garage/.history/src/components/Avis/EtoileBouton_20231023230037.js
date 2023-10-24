import React from 'react';

const StarButton = () => {
  return (
    <button
      type="button"
      className="rate-value-empty"
      aria-label="Noter 1 sur 5"
      style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
    >
      <span aria-hidden="true">1</span>
    </button>
  );
};

export default StarButton;
