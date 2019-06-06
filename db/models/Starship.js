const mongoose = require("../connection");

const StarshipSchema = new mongoose.Schema({
    
})

const Starship = mongoose.model("Starship", StarshipSchema);

module.exports = Starship;