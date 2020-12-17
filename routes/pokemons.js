const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Pokemon = require("../models/Pokemon");

// @desc    Show Add Page
// @route   GET /pokemons/add
router.get("/add", ensureAuth, (req, res) => {
  res.render("pokemons/add");
});

// @desc    Process add form
// @route   POST /pokemons
router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.name = req.user.id;
    await Pokemon.create(req.body);
    res.redirect("dex");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;