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
                            //loops through the array of new characters
                            const characterFromCollection = createdCharacters[i];
                            //finds matching names from original data as compared to names from new collection
                            const characterFromCharJSON = charactersData.find(character => {
                                return character.name === characterFromCollection.name })
                                Planet.findOne({name: characterFromCharJSON.home_planet})
                                .then(foundPlanet => {
                                    Starship.findOne({name:characterFromCharJSON.starship})
                                    .then(foundStarship => {
                                        //set the object's currently empty home planet and starship planet properties to their
                                        //respective object ids
                                        characterFromCollection.home_planet = foundPlanet._id;
                                        characterFromCollection.starship = foundStarship._id;
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