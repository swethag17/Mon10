var express = require('express');
var api = express.Router();

// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('flooring_coatings/index.ejs');
});




module.exports = api;