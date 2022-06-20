const express = require("express");
const Workout = require("../models/Workout");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// Get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// Add new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

// Update workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
