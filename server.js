// server.js
const express = require("express");
const app = express();
const cors = require("cors");

// Allow frontend requests
app.use(cors());

// Simple data (you can later store this in a database)
const statesInfo = {
  rajasthan: {
    title: "Rajasthan - The Royal Heritage",
    description:
      "Rajasthan is famous for forts, palaces, and vibrant folk traditions. Jaipur, Udaipur, and Jaisalmer are cultural gems known for Rajasthani cuisine, dance, and crafts.",
  },
  kerala: {
    title: "Kerala - God’s Own Country",
    description:
      "Kerala’s backwaters, Kathakali dance, Onam festival, and Ayurveda traditions make it one of the most culturally rich states in India.",
  },
  maharashtra: {
    title: "Maharashtra - Spirit of Unity",
    description:
      "Maharashtra boasts a blend of modern and traditional culture — from Lavani and Powada dance forms to the grand Ganesh Chaturthi festival.",
  },
  gujarat: {
    title: "Gujarat - Land of Festivals",
    description:
      "Gujarat is celebrated for Navratri Garba, rich textile art, and delicious cuisine like Dhokla and Thepla, along with architectural marvels like Somnath Temple.",
  },
};

// API endpoint to get state info
app.get("/state/:name", (req, res) => {
  const stateName = req.params.name.toLowerCase();
  const info = statesInfo[stateName];
  if (info) res.json(info);
  else res.status(404).json({ error: "State not found" });
});

// Start the server
app.listen(5000, () => console.log("✅ Server running on port 5000"));
