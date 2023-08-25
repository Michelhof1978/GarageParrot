import React from 'react';
import C
    <div className="car-list">
      {cars.map((car, index) => (
        <CarDetails key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
