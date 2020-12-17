const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  pokeName: {
    type: String,
    required: true,
  },
  pokeId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
