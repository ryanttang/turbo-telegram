var express = require('express');
var router = express.Router();
const Login = require('../models/Login');
const {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers
} = require('../controllers')


router.post('/createman', createManagers)

router.post('/login', login)

router.post('/createapt', createApartments)

router.post('assignman', assignManager)

router.get('managers', getManagers)


module.exports = router;
