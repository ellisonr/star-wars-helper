const mongoose = require("./connection");

const Character = require("./models/Character");
const Planet = require("./models/Planet");
const Starship = require("./models/Starship");

const charactersData = require("./characters.json");
const planetsData = require("./planets.json");
const starshipsData = require("./starships.json");

const validCharacters = charactersData.map(character => {
    const charCopy = JSON.parse(JSON.stringify(character))
    delete charCopy.home_planet;
    delete charCopy.starship;
    return charCopy
})

Character.deleteMany({}).then (()=>{
    Character.create(validCharacters).then(createdCharacters=>{
        Starship.deleteMany({}).then(()=>{
            Starship.create(starshipsData).then(createdStarships=>{
                Planet.deleteMany({}).then(()=>{
                    Planet.create(planetsData).then(createdPlanets=>{
                        for (let i=0; i<createdCharacters.length; i++){
                            //loops through the arrays of new characters
                            const characterFromCollection = createdCharacters[i];
                            //finds matching names from original data as compared to names from new characters
                            const characterFromCharJSON = charactersData.find(character => {
                                return character.name === characterFromCollection.name })
                                console.log(characterFromCollection);
                                console.log(characterFromCharJSON)
                                Planet.findOne({name: characterFromCharJSON.home_planet})
                                .then(foundPlanet => {
                                    console.log(foundPlanet)
                                    Starship.findOne({name:characterFromCharJSON.starship})
                                    .then(foundStarship => {
                                        console.log(foundStarship)
                                        characterFromCollection.home_planet = foundPlanet._id;
                                        characterFromCollection.starship = foundStarship._id;
                                        console.log(characterFromCollection)
                                        characterFromCollection.save();
                                    })
            
                                })
                           
                        }
                    })
                })
            })
        })
    })
})

// we need to make another three modelDataSeed arrays that remove the related fields in the 
// json (because they conflict with the expected ObjectIds in the Model Schemas)

// we can do that with Array.map

//1. use a different js file that's going to make a new json data which is just
//characters without the home_planet field and starship field

//2. use this seed file to match up the characters from the original file with the
//characters from the new file

//3. find homeplanets that have a matching planet name and insert that planet's object id
// in homeplanet field, same for starship

// Planet.deleteMany({}).then (() => {
//     Planet.create(planetsData)
//     .then(newPlanet => {
//         console.log(newPlanet)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// });

// Starship.deleteMany({}).then (() => {
// // starshipsData.forEach(starship => {
// // })
//     Starship.create(starshipsData)
//     .then(newStarship => {
//         console.log(newStarship)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// });

// Character.deleteMany({}).then (() => {
//     // charactersData.forEach(character => {
//     // })
//     Character.create(charactersData)
//     .then(newCharacter => {
//         console.log(newCharacter)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// });