const express = require("express");
const router = express.Router();

const Film = require("../db/models/Film");

router.get("/", (req, res) => {
    Film.find({}).then(films => res.json(films));
    });

router.get("/:title", (req, res) => {
    Film.find({ title: req.params.title})
    .then(films => res.json(films));
});

router.post("/", (req, res) => {
    Film.create(req.body)
    .then(film => res.json(film));
});

router.put("/:title", (req, res) => {
    Film.findOneAndUpdate({ title: req.params.title}, req.body,
        {new: true})
        .then(film => res.json(film));
});

router.delete("/:title", (req, res) => {
    Film.findOneAndDelete({ title: req.params.title})
    .then(film => {
    res.json(film);
    });
});

module.exports = router;