const express = require("express");
const router = express.Router();
const Club = require("../models/Club.model");

router.get("/getAllClub", (req, res) => {
  Club.find()
    .then(allClub => res.json(allClub))
    .catch(err => console.log("DB error", err));
});

// router.get("/:id", (req, res) => {
//   const coasterId = req.params.id;
//   Coaster.findById(coasterId)
//     .then(theCoaster => res.json(theCoaster))
//     .catch(err => console.log("DB error", err));
// });

router.post("/newclub", (req, res) => {
  const club = req.body;
  Club.create(club)
    .then(theNewClub => res.json(theNewClub))
    .catch(err => console.log("DB error", err));
});

module.exports = router;
