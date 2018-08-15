var express = require('express');
var router = express.Router();
const {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers,
  getApts,
  getWorkers,
  assignApt,
  assigntWorker
} = require('../controllers')

router.post('/createman', createManagers)

router.post('/login', login)

router.post('/createapt', createApartments)

router.post('/assignman', assignManager)

router.get('/getmanagers', getManagers)
router.get('/getapts', getApts)
router.get('/getworkers', getWorkers)

router.get('/assignapt', assignApt)
router.get('/assignworker', assigntWorker)


module.exports = router;
