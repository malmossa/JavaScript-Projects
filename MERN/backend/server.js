require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 4001;
const workoutRoutes = require("./routes/workouts");

// middleware
app.use(cors());
app.use(express.json()); // allow us to access the req.body, so we can get user data

// routes
app.use("/api/workouts", workoutRoutes);

// connect to database
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`The server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
