const mongoose = require("../connection");

const FilmSchema = new mongoose.Schema({
    
})

const Film = mongoose.model("Film", FilmSchema);

module.exports = Film;