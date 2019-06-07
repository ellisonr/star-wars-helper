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

## Characters
###### /api/characters/
When set to "get", this will return all characters.
###### /api/characters/id/:id
This path will return a single character based on its _id.
###### /api/characters/name/:name
This path will return a single character based on its name.
###### /api/characters/create
This path will create a new character entry.
###### /api/characters/update/id/:id
This path will update a character based on its _id.
###### /api/characters/update/name/:name
This path will update a character based on its name.
###### /api/characters/delete/id/:id
This path will delete a character based on its _id.
###### /api/characters/delete/name/:name
This path will delete a character based on its name.

## Starships
###### /api/starships/
When set to "get", this will return all starships.
###### /api/starships/id/:id
This path will return a single starship based on its _id.
###### /api/starships/name/:name
This path will return a single starship based on its name.
###### /api/starships/create
This path will create a new starship entry.
###### /api/starships/update/id/:id
This path will update a starship based on its _id.
###### /api/starships/update/name/:name
This path will update a starship based on its name.
###### /api/starships/delete/id/:id
This path will delete a starship based on its _id.
###### /api/starships/delete/name/:name
This path will delete a starship based on its name.

## Films
###### /api/films/
When set to "get", this will return all films.
###### /api/films/id/:id
This path will return a single film based on its _id.
###### /api/films/title/:title
This path will return a single film based on its name.
###### /api/films/create
This path will create a new film entry.
###### /api/films/update/id/:id
This path will update a film based on its _id.
###### /api/films/update/title/:title
This path will update a film based on its name.
###### /api/films/delete/id/:id
This path will delete a film based on its _id.
###### /api/films/delete/title/:title
This path will delete a film based on its name.