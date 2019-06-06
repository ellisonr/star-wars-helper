const express = require("express");
const parser = require("body-parser");

const charactersController = require("./controllers/characters")
const filmsController = require("./controllers/films")
const starshipsController = require("./controllers/starships")

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.use(parser.json());

app.use("/api/characters/", charactersController);
app.use("/api/films/", filmsController);
app.use("/api/starships", starshipsController);

app.listen(8080, () => console.log("Running on port 8080!"));