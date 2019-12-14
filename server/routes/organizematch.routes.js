const express = require("express");
const router = express.Router();
const Match = require("../models/Match.model");
const Club = require("../models/Club.model")
const User = require("../models/User.model");


router.get("/allCreatedMatch", (req, res) => {
  Match.find()
    .populate("club")
    .populate("participant")
    .then(allCreatedMatch => res.json(allCreatedMatch))
    .catch(err => console.log("DB error", err));
});

router.get("/:id", (req, res) => {
  const MatchId = req.params.id;
  Match.findById(MatchId)
    .populate("club")
    .populate("participant")
    .then(theMatch => res.json(theMatch))
    .catch(err => console.log("DB error", err));
});

router.post("/new", (req, res) => {
  const match = req.body;
  Match.create(match)
    .then(theNewMatch => res.json(theNewMatch))
    .catch(err => console.log("DB error", err));
});

router.post("/edit/:id", (req, res) => {
  const match = req.body;
  // const { name, description, inversions, length, park } = req.body;
  Match.findByIdAndUpdate(req.params.id, match)
    .then(theNewMatch => res.json(theNewMatch))
    .catch(err => console.log(err));
});

router.get("/delete/:id", (req, res) => {
  Match.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "delete ok" }))
    .catch(err => console.log(err));
});

router.post("/join/:id", (req, res) => {
  const match = req.body;
  
  console.log(req.body);
  // const { name, description, inversions, length, park } = req.body;
  Match.findByIdAndUpdate(req.body.match, { $push: { participant: req.body.id } })
    .then(theNewMatch => res.json(theNewMatch))
    .catch(err => console.log(err));
});


router.get("/allCreatebyOwner", (req, res) => {
  
  Match.findById(MatchId)
    .then(allCreatedMatch => res.json(allCreatedMatch))
    .catch(err => console.log("DB error", err));
});


module.exports = router;
