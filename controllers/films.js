const express = require("express");
const router = express.Router();

const Film = require("../db/models/Film");

router.get("/", (req, res) => {
    Film.find({}).then(films => res.json(films));
    });

router.get("/:name", (req, res) => {
    Film.find({ name: req.params.name})
    .then(films => res.json(films));
});

router.post("/", (req, res) => {
    Film.create(req.body)
    .then(film => res.json(film));
});

router.put("/:name", (req, res) => {
    Film.findOneAndUpdate({ name: req.params.name}, req.body,
        {new: true})
        .then(film => res.json(film));
});

router.delete("/:name", (req, res) => {
    Film.findOneAndDelete({ name: req.params.name})
    .then(film => {
    res.json(film);
    });
});

module.exports = router;