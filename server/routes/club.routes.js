const express = require("express");
const router = express.Router();
const Club = require("../models/Club.model");

router.get("/getAllClub", (req, res) => {
  Club.find()
    .then(allClub => res.json(allClub))
    .catch(err => console.log("DB error", err));
});

router.get("/:id", (req, res) => {
  const clubId = req.params.id;
  Club.findById(clubId)
    .then(theClub => res.json(theClub))
    .catch(err => console.log("DB error", err));
});

router.post("/newclub", (req, res) => {
  const club = req.body;
  Club.create(club)
    .then(theNewClub => res.json(theNewClub))
    .catch(err => console.log("DB error", err));
});

module.exports = router;
