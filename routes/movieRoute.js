// routes/movies.js

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Route for getting all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for getting a single movie by ID
router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie);
});

// Middleware function to get a single movie by ID
async function getMovie(req, res, next) {
  let movie;
  try {
    movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.movie = movie;
  next();
}

module.exports = router;
