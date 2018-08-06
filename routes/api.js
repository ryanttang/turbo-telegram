var express = require('express');
var router = express.Router();
const Login = require('./models/Login');

const { Lead, Manager, Property, Worker } = require('../models');
const c = (x, i) => c ? cl.x45.bold.underline(i) : cl.green.xb34.underline(i);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

router.post('/createuser', function(req, res, next) {
  const { username, password } = req.body;
  // console.log(cl.x45.bold.underline(true, username), cl.green.xb34.underline(false, password));
  console.log(username, password);
  res.send(req.body);
})

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
    Login.find({username}, (err, name) => {
      
    })
  
})


module.exports = router;
