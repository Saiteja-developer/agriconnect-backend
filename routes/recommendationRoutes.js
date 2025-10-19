// routes/recommendationRoutes.js
const express = require('express');
const router = express.Router();

// 🌿 Existing crop planner-based route (DON'T TOUCH THIS)
router.post('/', (req, res) => {
  const { location, soilType, previousCrops } = req.body;

  let crops = [];

  if (soilType.toLowerCase().includes("black")) {
    crops.push("Cotton", "Soybean");
  } else if (soilType.toLowerCase().includes("red")) {
    crops.push("Millets", "Groundnut");
  } else {
    crops.push("Maize", "Tomatoes");
  }

  if (previousCrops.toLowerCase().includes("rice")) {
    crops.push("Wheat", "Chickpea");
  }

  res.json({ crops: [...new Set(crops)] });
});


// 🌧️ NEW: Smart crop recommendation based only on rainfall
router.post('/smart', (req, res) => {
  const { rainfall } = req.body;

  let crops = [];

  // 💧 Rainfall-based crop decision
  if (rainfall >= 100) {
    crops = ["Paddy", "Sugarcane", "Jute"];
  } else if (rainfall >= 50) {
    crops = ["Maize", "Cotton", "Groundnut"];
  } else if (rainfall >= 20) {
    crops = ["Chickpea", "Bajra", "Horsegram"];
  } else {
    crops = ["Millets", "Mustard", "Sunflower"];
  }

  res.json({ crops });
});

module.exports = router;
