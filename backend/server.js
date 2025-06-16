const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// ✅ This path points from backend/index.js to frontend/public/plants.json
const PLANTS_JSON_PATH = path.join(__dirname, '..', 'frontend', 'public', 'plants.json');

app.get('/api/plants', (req, res) => {
  fs.readFile(PLANTS_JSON_PATH, 'utf8', (err, jsonData) => {
    if (err) {
      console.error('Error reading plants.json:', err);
      return res.status(500).json({ error: 'Failed to read plant data' });
    }

    try {
      const plants = JSON.parse(jsonData);
      res.json(plants);
    } catch (parseErr) {
      console.error('Error parsing plants.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});