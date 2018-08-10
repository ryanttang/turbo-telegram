const { User, Property } = require('../models');

const createManagers = (req, res) => {
  console.log(req.body);
  const {
    username, password
  } = req.body;
  User.create({ username, password, role: ['manager'] }, (err, manager) => {
    if (err) {
      res.send(err)
    } else {
      res.send(`${manager._id} @ ${manager.username} has been created`)
    }
  })
}

const createApartments = (req, res) => {
  const {
    title, address
  } = req.body;
  Property.create({ title, address }, (err, apt) => {
    if (err) return err;
    res.send(`${apt._id} @ ${apt.username} has been created`)
  })
}

const assignManager = (req, res) => {
  const { id, propertyId } = req.body;
  User.findByIdAndUpdate(id, {
    "$push": { "assigned": propertyId }
  })
}

const getManagers = (req, res) => {
  User.find({ role: { "$in": ["manager"] } }, (err, list) => {
    console.log(list);
    res.send(list)
  })
}

const login = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  User.find({ username }, (err, user) => {
    console.log(user);
    if (!user[0]) {
      res.json({ success: false });
    } else {
      // if (err) throw err;
      try {
        password === user[0].password ?
          res.json({ success: true })
          : res.json({ success: false });
      } catch (err) {
        res.send('not found')
      }
    }
  })


}

module.exports = {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers
}