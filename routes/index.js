const express = require("express");
const router = express.Router();

// @desc    Landing Page
// @route   GET /
router.get("/", (req, res) => {
  res.render("login");
});

// @desc    Dashboard
// @route   GET /dex
router.get("/dex", (req, res) => {
  res.render("dex");
});

module.exports = router;
