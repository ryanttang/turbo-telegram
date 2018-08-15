var express = require('express');
var router = express.Router();
const {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers,
  getApts
} = require('../controllers')

router.post('/createman', createManagers)

router.post('/login', login)

router.post('/createapt', createApartments)

router.post('/assignman', assignManager)

router.get('/getmanagers', getManagers)
router.get('/getapts', getApts)


module.exports = router;
