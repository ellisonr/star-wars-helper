const mongoose = require("../connection");

const StarshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    cost_in_credits: {
        type: Number
    },
    length: {
        type: Number
    },
    crew: {
        type: Number
    },
    passengers: {
        type: Number
    },
    cargo_capacity: {
        type: Number
    },
    consumables: {
        type: String
    },
    hypderdrive_rating: {
        type: Number
    },
    starship_class: {
        type: String
    },
    created: {
        type: Date
    },
    edited: {
        type: Date
    },
    url: {
        type: String,
    }
})

const Starship = mongoose.model("Starship", StarshipSchema);

module.exports = Starship;