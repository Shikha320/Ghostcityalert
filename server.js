console.log("Server Starting...");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ✅ Correct Route Import (File name must be reportRoutes.js)
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.send("GhostCity Alert Backend Running ✅");
});


// Main Reports Routes
app.use("/api/reports", reportRoutes);


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`MySQL Connected Successfully ✅`);
  console.log(`Server running on port ${PORT} 🚀`);
});
