import React, { useEffect, useState } from 'react';

const PlantList = ({ onSelectPlant }) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/plants');
        const data = await res.json();

        // Filter duplicates based on id
        const seen = new Set();
        const uniquePlants = data.filter(plant => {
          if (seen.has(plant.id)) return false;
          seen.add(plant.id);
          return true;
        });

        setPlants(uniquePlants);
      } catch (err) {
        console.error("Error fetching plants:", err);
      }
    };

    fetchPlants();
  }, []); // Runs only once on mount

  return (
    <div className="grid container">
      {plants.map(plant => (
        <div key={plant.id} className="card" onClick={() => onSelectPlant(plant)}>
          <img src={plant.image} alt={plant.commonName} />
          <h3>{plant.commonName}</h3>
          <p><i>{plant.scientificName}</i></p>
        </div>
      ))}
    </div>
  );
};

export default PlantList;