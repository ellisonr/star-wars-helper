const express = require("express");
const parser = require("body-parser");

const charactersController = require("./controllers/characters")
const planetsController = require("./controllers/planets")
const starshipsController = require("./controllers/starships")

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("/api/characters")
});

app.use("/api/characters/", charactersController);
app.use("/api/planets/", planetsController);
app.use("/api/starships", starshipsController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});