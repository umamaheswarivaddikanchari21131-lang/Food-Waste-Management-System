const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json(food);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();

    res.json(foods);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;