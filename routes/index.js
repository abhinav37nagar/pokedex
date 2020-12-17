const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// @desc    Landing Page
// @route   GET /
router.get("/", ensureGuest, (req, res) => {
  res.render("login", { layout: "login" });
});

// @desc    Dashboard
// @route   GET /dex
router.get("/dex", ensureAuth, (req, res) => {
  console.log(req.user);
  res.render("dex", {
    name: req.user.firstName,
  });
});

module.exports = router;
