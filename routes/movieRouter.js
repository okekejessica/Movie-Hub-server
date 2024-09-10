const express = require("express");
const {
  allShows,
  allSeries,
  allMovies,
} = require("../controllers/movieController");
const methodNotAllowed = require("../utils/methodNotAllowed");

const router = express.Router();

// route for all shows
router.route("/").get(allShows).all(methodNotAllowed);

// route for all series
router.route("/series").get(allSeries).all(methodNotAllowed);

// route for all movies
router.route("/movies").get(allMovies).all(methodNotAllowed);

module.exports = router;
