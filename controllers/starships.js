const express = require("express");
const router = express.Router();

const Starship = require("../db/models/Starship");

router.get("/", (req, res) => {
    Starship.find({}).then(starships => res.json(starships));
});

router.get("/id/:id", (req,res) => {
    Starship.find({ _id: req.params.id})
    .then(starship => res.json(starship))
})

router.get("/:name", (req, res) => {
    Starship.find({ name: req.params.name})
    .then(starship => res.json(starship));
});

router.post("/", (req, res) => {
    Starship.create(req.body)
    .then(starship => res.json(starship));
});

router.put("/id/:id", (req, res) => {
    Starship.findOneAndUpdate({ _id: req.params.id}, req.body,
    {new: true})
    .then(starship => res.json(starship));
});

router.put("/:name", (req, res) => {
    Starship.findOneAndUpdate({ name: req.params.name}, req.body,
    {new: true})
    .then(starship => res.json(starship));
});

router.delete("/id/:id", (req, res) => {
    Starship.findOneAndDelete({ _id: req.params.id})
    .then(starship => {
    res.json(starship);
    });
});

router.delete("/:name", (req, res) => {
    Starship.findOneAndDelete({ name: req.params.name})
    .then(starship => {
    res.json(starship);
    });
});

module.exports = router;