import React from 'react';

const PlantDetail = ({ plant, onClose }) => {
  if (!plant) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{plant.commonName}</h2>
        <img src={plant.image} alt={plant.commonName} />
        <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
        <p><strong>Care Level:</strong> {plant.careLevel}</p>
        <p>{plant.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlantDetail;
