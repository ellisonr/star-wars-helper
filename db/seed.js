const mongoose = require("./connection");

const Character = require("./models/Character");
const Planet = require("./models/Planet");
const Starship = require("./models/Starship");

const charactersData = require("./characters.json");
const planetsData = require("./planets.json");
const starshipsData = require("./starships.json");

// we need to make another three modelDataSeed arrays that remove the related fields in the 
// json (because they conflict with the expected ObjectIds in the Model Schemas)

// we can do that with Array.map

//1. use a different js file that's going to make a new json data which is just
//characters without the home_planet field

//2. use this seed file to match up the characters from the original file with the
//characters from the new file

//3. find homeplanets that have a matching planet name and insert that planet's object id
// in homeplanet field

Character.deleteMany({}).then (() => {
    // charactersData.forEach(character => {
    // })
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

Starship.deleteMany({}).then (() => {
// starshipsData.forEach(starship => {
// })
    Starship.create(starshipsData)
    .then(newStarship => {
        console.log(newStarship)
    })
    .catch(err => {
        console.log(err)
    })
});