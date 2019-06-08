const mongoose = require("../connection");

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height:
    {
        type: Number
    },
    mass: {
        type: Number
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    eye_color: {
        type: String
    },
    birth_year: {
        type: String
    },
    gender: {
        type: String
    },
    home_planet: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Planet"
        }
    ],
    created: {
        type: Date
    },
    edited: {
        type: Date
    },
    url: {
        type: String
    }

})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;