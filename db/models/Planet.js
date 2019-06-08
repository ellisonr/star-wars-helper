const mongoose = require("../connection");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rotation_period: {
        type: Number,
        required: true
    },
    orbital_period: {
        type: Number,
        required: true
    },
    diameter: {
        type: Number,
        required: true
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
    residents:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character"
        }
    ],
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