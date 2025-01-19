const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mentorRoutes = require("./routes/mentor");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/mentor", mentorRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
