const mongoose = require("../connection");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rotation_period: {
        type: Number,
    },
    orbital_period: {
        type: Number,
    },
    diameter: {
        type: Number,
    },
    climate: {
        type: String
    },
    gravity: {
        type: String
    },
    terrain: {
        Type: String
    },
    surface_water: {
        Type: Number
    },
    population: {
        Type: Number
    },
    created: {
        type: Date
    },
    edited: {
        type: Date
    },
    url: {
        type: String,
        required: true
    }
})

const Planet = mongoose.model("Planet", PlanetSchema);

module.exports = Planet;