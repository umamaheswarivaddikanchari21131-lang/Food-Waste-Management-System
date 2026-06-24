const express = require("express");
const Request = require("../models/Request");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const request = await Request.create(req.body);

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const requests = await Request.find();

    res.json(requests);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;