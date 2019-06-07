Star Wars Helper
================

## Audience

This API is intended for use by fans of the movie franchise Star Wars. Users of this API will have the ability to browse data on Star Wars
* characters
* starships
* films

Users will be able to see which characters piloted certain starships, which films any character appears in, and many other fun facts.

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

### Films
##### /api/films/
When set to "get", this will return all films.
##### /api/films/id/:id
This path will return a single film based on its _id.
##### /api/films/title/:title
This path will return a single film based on its name.
##### /api/films/create
This path will create a new film entry.
##### /api/films/update/id/:id
This path will update a film based on its _id.
##### /api/films/update/title/:title
This path will update a film based on its name.
##### /api/films/delete/id/:id
This path will delete a film based on its _id.
##### /api/films/delete/title/:title
This path will delete a film based on its name.

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

### Film
```
{
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "characters": [],
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2015-04-11T09:46:52.774897Z",
    "url": "https://swapi.co/api/films/1/"
}
```