const express = require("express");
const router = express.Router();

const Character = require("../db/models/Character");

router.get("/", (req, res) => {
    Character.find({}).then(characters => res.json(characteres));
});

router.get("/:name", (req, res) => {
    Character.find({ name: req.params.name})
    .then(characters => res.json(bookmarks));
});

router.post("/", (req,res) => {
    Character.create(req.body)
    .then(character => res.json(character));
});

router.put("/:name", (req, res) => {
    Character.findOneAndUpdate({ name: req.params.name}, req.body,
    {new: true})
    .then(character => res.json(character));
});

router.delete("/:name", (req, res) => {
    Character.findOneAndDelete({ name: req.params.name})
    .then(character => {
    res.json(character);
    });
});

module.exports = router;