const express = require("express");
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
router.post("/", (req, res) => {
  res.json({ message: "Add new workout" });
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
