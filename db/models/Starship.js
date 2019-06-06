const mongoose = require("../connection");

const StarshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    cost_in_credits: {
        type: String
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
    pilots: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Character"
        }
    ],
    films: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Film
        }
    ],
    created: {
        type:
    },
    edited: {
        type:
    },
    url: {
        type: String,
        required: true
    }
})

const Starship = mongoose.model("Starship", StarshipSchema);

module.exports = Starship;