// models/movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    type: mongoose.Schema.Types.Mixed // Mixed type for flexible structure
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    type: mongoose.Schema.Types.Mixed // Mixed type for flexible structure
  },
  countries: [String],
  type: String,
  tomatoes: {
    type: mongoose.Schema.Types.Mixed // Mixed type for flexible structure
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
