const mongoose = require("./connection");

const charactersData = require("./characters.json");
const planetsData = require("./planets.json");
const starshipsData = require("./starships.json");

// we need to make another three modelDataSeed arrays that remove the related fields in the 
// json (because they conflict with the expected ObjectIds in the Model Schemas)

// we can do that with Array.map

const Character = require("./models/Character");
const Planet = require("./models/Planet");
const Starship = require("./models/Starship");

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

Planet.deleteMany({})
.then (() => {
    Planet.create(planetsData)
    .then(newPlanet => {
        console.log(newPlanet)
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