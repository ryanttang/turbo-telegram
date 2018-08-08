var express = require('express');
var router = express.Router();
const Login = require('../models/Login');
const {
  createManagers,
  createProperties,
  assignManager,
  login
} = require('../controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

router.post('/createuser', function(req, res, next) {
  const { username, password } = req.body;
  console.log(username, password);
  res.send(req.body);
})

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
    Login.find({username}, (err, user) => {
      if(err) throw err;
      password === user[0].password ?
        res.send(true)
        : res.json(false);
    })
  
})


module.exports = router;
