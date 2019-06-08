Star Wars Helper
================

## Audience

This API is intended for use by fans of the movie franchise Star Wars. Users of this API will have the ability to browse data on Star Wars
* characters
* starships
* planets

Users will be able to see which characters piloted certain starships, which planets a certain character is from, and many other fun facts.

## Technologies Used

* API was created by using Express, Mongoose, Node.js
* Deployed via Heroku
* Hosted by MongoDB Atlas
* Testing completed on Postman

## Dependencies

* "express": "^4.17.1"
* "mongoose": "^5.5.13"
* "nodemon": "^1.19.1"

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
    "films": [],
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
    "residents": [],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "https://swapi.co/api/planets/2/"
}
```