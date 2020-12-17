const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Pokemon = require("../models/Pokemon");

// @desc    Landing Page
// @route   GET /
router.get("/", ensureGuest, (req, res) => {
  res.render("login", { layout: "login" });
});

// @desc    Dashboard
// @route   GET /dex
router.get("/dex", ensureAuth, async (req, res) => {
  const pokemons = await Pokemon.find().lean();
  try {
    res.render("dex", {
      name: req.user.firstName,
      pokemons,
    });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
