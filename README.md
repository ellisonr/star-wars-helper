Star Wars Helper
================

## Audience

This API is intended for use by fans of the movie franchise Star Wars. Users of this API will have the ability to browse data on Star Wars
* characters
* starships
* planets

Users will be able to see which characters piloted certain starships, which planet a certain character is from, and many other fun facts.

## Technologies Used

* API was created using Express, Mongoose, Node.js
* Testing completed on Postman
* Deployed via Heroku
* Hosted by MongoDB Atlas

## Dependencies

* "express": "^4.17.1"
* "mongoose": "^5.5.13"
* "nodemon": "^1.19.1"

## Installation

1. Fork and clone repository
2. Switch into appropriate directory using terminal and run the following:
* ```npm init```
* ```npm install``` in order to isntall dependencies
* ```node db/seed.js``` to seed the database
3. Run mongod
4. In a separate terminal window, run nodemon.
5. Using a browser, go to localhost:8080/api/characters, localhost:8080/api/planets,
localhost:8080/api/starships to explore the API. Another option would be to use Postman to send various requrests to the API.

## Project Approach

* Prioritize planning stage. Create ERD and lay out initial plans in a planning directory and document.
* Commit early and often.
* Create a controllers directory with appropriate files inside to set routes.
* Create a db directory with appropriate files inside including seed file and connection file.
* Create a models directory with appropriate files inside to set schemas.
* Populate json files for each model.
* Test that all routes are working on Postman.
* Deploy using Heroku.
* Record a screencast.

## Things I've learned

During this project:
* I became more comfortable with using Postman to make get, post, put, and delete requests to the API. I enjoyed seeing the results in real time as I tested each request in each model.

* I became more adept at writing intuitive routes for each function that I wanted completed.

* I grew in my confidence in creating a project from scratch. This includes creating a repository on github, installing dependencies, creating appropriate folders and files within said folders, requiring and exporting effectively between various .js files.

## Object Examples

### Character
```
{
    "name": "Luke Skywalker",
    "height": 172,
    "mass": 77,
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "home_planet": [],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}
```
### Starship
```
{
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": 100000,
    "length": 34.37,
    "crew": 4,
    "passengers": 6,
    "cargo_capacity": 100000,
    "consumables": "2 months",
    "hyperdrive_rating": 0.5,
    "starship_class": "Light freighter",
    "pilots": [],
    "created": "2014-12-10T16:59:45.094000Z",
    "edited": "2014-12-22T17:35:44.464156Z",
    "url": "https://swapi.co/api/starships/10/"
}
```

### Planet
```
{
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "https://swapi.co/api/planets/2/"
}
```
## Paths

### Characters
##### /api/characters/
When set to "get", this will return all characters.
##### /api/characters/id/:id
This path will return a single character based on its _id.
##### /api/characters/name/:name
This path will return a single character based on its name.
##### /api/characters/create
This path will create a new character entry.
##### /api/characters/update/id/:id
This path will update a character based on its _id.
##### /api/characters/update/name/:name
This path will update a character based on its name.
##### /api/characters/delete/id/:id
This path will delete a character based on its _id.
##### /api/characters/delete/name/:name
This path will delete a character based on its name.

### Starships
##### /api/starships/
When set to "get", this will return all starships.
##### /api/starships/id/:id
This path will return a single starship based on its _id.
##### /api/starships/name/:name
This path will return a single starship based on its name.
##### /api/starships/create
This path will create a new starship entry.
##### /api/starships/update/id/:id
This path will update a starship based on its _id.
##### /api/starships/update/name/:name
This path will update a starship based on its name.
##### /api/starships/delete/id/:id
This path will delete a starship based on its _id.
##### /api/starships/delete/name/:name
This path will delete a starship based on its name.

### Planets
##### /api/planets/
When set to "get", this will return all planets.
##### /api/planets/id/:id
This path will return a single planet based on its _id.
##### /api/planets/title/:title
This path will return a single planet based on its name.
##### /api/planets/create
This path will create a new planet entry.
##### /api/planets/update/id/:id
This path will update a planet based on its _id.
##### /api/planets/update/title/:title
This path will update a planet based on its name.
##### /api/planets/delete/id/:id
This path will delete a planet based on its _id.
##### /api/planets/delete/title/:title
This path will delete a planet based on its name.