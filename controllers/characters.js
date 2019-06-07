const express = require("express");
const router = express.Router();

const Character = require("../db/models/Character");

router.get("/", (req, res) => {
    Character.find({}).then(characters => res.json(characters));
});

router.get("/id/:id", (req,res) => {
    Character.find({ _id: req.params._id})
    .then(character => res.json(character))
})

router.get("/name/:name", (req, res) => {
    Character.find({ name: req.params.name})
    .then(character => res.json(character));
});

router.post("/create", (req,res) => {
    Character.create(req.body)
    .then(character => res.json(character));
});

router.put("/update/id/:id", (req, res) => {
    Character.findOneAndUpdate({ _id: req.params._id}, req.body,
    {new: true})
    .then(character => res.json(character));
});

router.put("/update/name/:name", (req, res) => {
    Character.findOneAndUpdate({ name: req.params.name}, req.body,
    {new: true})
    .then(character => res.json(character));
});

router.delete("/delete/id/:id", (req, res) => {
    Character.findOneAndDelete({ _id: req.params._id})
    .then(character => {
    res.json(character);
    });
});

router.delete("/delete/name/:name", (req, res) => {
    Character.findOneAndDelete({ name: req.params.name})
    .then(character => {
    res.json(character);
    });
});

module.exports = router;
