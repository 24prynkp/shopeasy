const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const name = "priyanka";

// Simple route
app.get("/", (req, res) => {
  const message = "welcome to shopeasy from priyanka";
  res.send(message);
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export for testing
module.exports = { app, server ,name };