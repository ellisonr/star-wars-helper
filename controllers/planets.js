const express = require("express");
const router = express.Router();

const Planet = require("../db/models/Planet");

router.get("/", (req, res) => {
    Planet.find({}).then(planets => res.json(planets));
});

router.get("/id/:id", (req,res) => {
    Planet.find({ _id: req.params.id})
    .then(planet => res.json(planet))
})

router.get("/:name", (req, res) => {
    Planet.find({ name: req.params.name})
    .then(planet => res.json(planet));
});

router.post("/", (req, res) => {
    Planet.create(req.body)
    .then(planet => res.json(planet));
});

router.put("/id/:id", (req, res) => {
    Planet.findOneAndUpdate({ _id: req.params.id}, req.body,
    {new: true})
    .then(planet => res.json(planet));
});

router.put("/:name", (req, res) => {
    Planet.findOneAndUpdate({ name: req.params.name}, req.body,
    {new: true})
    .then(planet => res.json(planet));
});

router.delete("/id/:id", (req, res) => {
    Planet.findOneAndDelete({ _id: req.params.id})
    .then(planet => {
    res.json(planet);
    });
});

router.delete("/:name", (req, res) => {
    Planet.findOneAndDelete({ name: req.params.name})
    .then(planet => {
    res.json(planet);
    });
});

module.exports = router;