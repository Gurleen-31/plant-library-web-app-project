import React from 'react';

const PlantCard = ({ plant, onClick }) => (
  <div onClick={() => onClick(plant)} className="card">
    <img src={plant.image} alt={plant.commonName} />
    <h3>{plant.commonName}</h3>
    <p><i>{plant.scientificName}</i></p>
  </div>
);

export default PlantCard;
