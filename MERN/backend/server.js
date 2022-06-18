require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4001;

// middleware
app.use(cors());
app.use(express.json()); // allow us to access the req.body, so we can get user data

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

// listen for requests
app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
