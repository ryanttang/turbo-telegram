const { User, Property } = require('../models');

const createManagers = (res, req) => {
  const { 
    username, password
  } = req.body;
  Manager.create({username, password, role: ['manager']}, (err, manager) => {
    if(err) return err;
    res.send(`${manager} has been created`)
  })
}

const createApartments = (res, req) => {
  const {
    title, address
  } = req.body;
  Property.create({title, address}, (err, apt) => {
    if(err) return err;
    res.send(`${apt} has been created`)
  })
}

const assignManager = (res, req) => {
  const { id, propertyId } = req.body;
  User.findByIdAndUpdate(id, {
    "$push": { "assigned": propertyId }
  })
}

const getManagers = (res, req) => {
  User.find({ role: { "$in": ["manager"] }})
}

const login = (res, req) => {
  const { username, password } = req.body;
  User.find({ username }, (err, user) => {
    if (err) throw err;
    password === user[0].password ?
      res.send(true)
      : res.json(false);
  })
}

module.exports = {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers
}