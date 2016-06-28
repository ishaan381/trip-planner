var express = require('express');
var router = express.Router();
var models = require('../models');
var db = models.db;
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;
var Promise = require('bluebird')

router.get('/', function (req, res, next) {
  Promise.all([Place.findAll({}), Hotel.findAll({}), Activity.findAll({}), Restaurant.findAll({})])
  .spread(function (places, hotels, activities, restaurants){
    console.log(hotels)
    res.render('index', {thing: hotels})
    // res.json(activities)
  })
})

module.exports = router
