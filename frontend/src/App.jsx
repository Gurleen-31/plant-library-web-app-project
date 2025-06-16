import React, { useEffect, useState } from 'react';
import PlantCard from './components/PlantCard';
import PlantDetail from './components/PlantDetail';
import './App.css';

const App = () => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  const filteredPlants = plants.filter(plant =>
    plant.commonName.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? plant.careLevel === filter : true)
  );

  return (
    <div className="container">
      <h1>Plant Care Library 🌿</h1>

      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="filters">
        {['Easy', 'Medium', 'Hard'].map(level => (
          <button
            key={level}
            className={filter === level ? 'active' : ''}
            onClick={() => setFilter(filter === level ? '' : level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} onClick={setSelectedPlant} />
        ))}
      </div>

      <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
    </div>
  );
};

export default App;
