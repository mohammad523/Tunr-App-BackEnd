const express = require("express");
const router = express.Router();
const Song = require("../models/song");

router.get("/", (req, res) => res.send("This is root!"));

// find all songs
router.get("/songs", (req, res) => {
  Song.find({}, (err, songs) => {
    if (err) console.log(err);
    else res.send(songs);
  });
});

// find song by ID
router.get("/songs/:id", (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    if (err) console.log(err);
    else res.send(song);
  });
});

// update song by ID
router.put("/songs/:id", (req, res) => {
  Song.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, song) => {
      if (err) console.log(err);
      else res.send(song);
    }
  );
});

// delete song by ID
router.delete("/songs/:id", (req, res) => {
  Song.findByIdAndDelete(req.params.id, (err, song) => {
    if (err) console.log(err);
    else res.send(song);
  });
});

// create new song
router.post("/songs", (req, res) => {
  Song.create(req.body, (err, song) => {
    if (err) console.log(err);
    else res.send(song);
  });
});

module.exports = router;
