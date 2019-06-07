const mongoose = require("./connection");

const charactersData = require("./characters.json");
const filmsData = require("./films.json");
const starshipsData = require("./starships.json");

const Character = require("./models/Character");
const Film = require("./models/Film");
const Starship = require("./models/Starship");

const swapi = require('swapi-node');

swapi.getPerson(1).then((result) => {
    console.log(result);
});

Character.deleteMany({})
.then (() => {
    Character.create(charactersData)
    .then(newCharacter => {
        console.log(newCharacter)
    })
    .catch(err => {
        console.log(err)
    })
});

Film.deleteMany({})
.then (() => {
    Film.create(filmsData)
    .then(newFilm => {
        console.log(newFilm)
    })
    .catch(err => {
        console.log(err)
    })
});

Starship.deleteMany({})
.then (() => {
    Starship.create(starshipsData)
    .then(newStarship => {
        console.log(newStarship)
    })
    .catch(err => {
        console.log(err)
    })
});