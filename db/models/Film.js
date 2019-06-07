const mongoose = require("../connection");

const FilmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    episode_id: {
        type: Number,
        required: true
    },
    opening_crawl: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    characters: [
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

const Film = mongoose.model("Film", FilmSchema);

module.exports = Film;