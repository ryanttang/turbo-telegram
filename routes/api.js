var express = require('express');
var router = express.Router();

const { Lead, Manager, Property, Worker } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})


module.exports = router;
