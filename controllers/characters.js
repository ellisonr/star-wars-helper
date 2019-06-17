const express = require("express");
const router = express.Router();

const Character = require("../db/models/Character");

router.get("/", (req, res) => {
    Character.find({})
    .populate("home_planet", "name")
    .populate("starship", "name")
    .exec((err, characters) =>
    res.json(characters));
});

router.get("/id/:id", (req,res) => {
    Character.find({ _id: req.params.id})
    .then(character => res.json(character))
})

router.get("/:name", (req, res) => {
    Character.find({ name: req.params.name})
    .then(character => res.json(character));
});

router.post("/", (req,res) => {
    Character.create(req.body)
    .then(character => res.json(character));
});

router.put("/id/:id", (req, res) => {
    Character.findOneAndUpdate({ _id: req.params.id}, req.body,
    {new: true})
    .then(character => res.json(character));
});

router.put("/:name", (req, res) => {
    Character.findOneAndUpdate({ name: req.params.name}, req.body,
    {new: true})
    .then(character => res.json(character));
});

router.delete("/id/:id", (req, res) => {
    Character.findOneAndDelete({ _id: req.params.id})
    .then(character => {
    res.json(character);
    });
});

router.delete("/:name", (req, res) => {
    Character.findOneAndDelete({ name: req.params.name})
    .then(character => {
    res.json(character);
    });
});

module.exports = router;
