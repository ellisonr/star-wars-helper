const express = require("express");
const router = express.Router();

const Film = require("../db/models/Film");

router.get("/", (req, res) => {
    Film.find({}).then(films => res.json(films));
    });

router.get("/id/:id", (req,res) => {
    Film.find({ _id: req.params._id})
    .then(film => res.json(film))
    })

router.get("/title/:title", (req, res) => {
    Film.find({ title: req.params.title})
    .then(film => res.json(film));
});

router.post("/create", (req, res) => {
    Film.create(req.body)
    .then(film => res.json(film));
});

router.put("/update/id/:id", (req, res) => {
    Film.findOneAndUpdate({ _id: req.params._id}, req.body,
        {new: true})
        .then(film => res.json(film));
});

router.put("/udpate/title/:title", (req, res) => {
    Film.findOneAndUpdate({ title: req.params.title}, req.body,
        {new: true})
        .then(film => res.json(film));
});

router.delete("/delete/id/:id", (req, res) => {
    Film.findOneAndDelete({ _id: req.params._id})
    .then(film => {
    res.json(film);
    });
});

router.delete("/delete/title/:title", (req, res) => {
    Film.findOneAndDelete({ title: req.params.title})
    .then(film => {
    res.json(film);
    });
});

module.exports = router;