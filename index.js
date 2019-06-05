const express = require("express");
const parser = require("body-parser");

const charactersController = require("./controllers/characters")
const filmsController = require("./controllers/films")
const vehiclesController = require("./controllers/vehicles")

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.use(parser.json());

app.use("/api/characters/", charactersController);
app.use("/api/films/", filmsController);
app.use("/api/vehicles", vehiclesController);

app.listen(8080, () => console.log("Running on port 8080!"));