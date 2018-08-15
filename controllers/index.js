const { User, Property } = require('../models');

const createManagers = (req, res) => {
  console.log("blehhhhhhhhhhhh")
  console.log({...req.body})
  User.create({ ...req.body  }, (err, manager) => {
    console.log(manager)
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
  User.find({ role: "manager" }, (err, list) => {
    res.send(list)
  })
}

const getApts = (req, res) => {
  Property.find({}, (err, apts) => {
    res.send(apts);
  })
}

const getWorkers = (req, res) => {
  User.find({ role: "worker" }, (err, list) => {
    res.send(list)
  })
}

const assignApt = (req, res) => {
  const { managerID, aptID } = req.body;
  User.update(
    { _id: managerID },
    { $push: { assigned: aptID } }
  ).exec((err, manager) => {
    if(err) console.log(err);
    res.send(`${manager} saved succesffuly`)
  });
}

const assignWorker = (req, res) => {
  const { workerID, aptID } = req.body;
  User.update(
    { _id: workerID },
    { $push: { assigned: aptID } }
  ).exec((err, worker) => {
    if(err) console.log(err);
    res.send(`${worker} saved succesffuly`)
  });
}

const login = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username, password);
  User.find({ username }, (err, user) => {
    console.log(user);
    if (err) throw err;
    try {
      password === user[0].password ?
        res.json({success: true})
        : res.json({success: false});
    } catch (err) {
      res.send('not found')
    }
  })

}

module.exports = {
  createManagers,
  createApartments,
  assignManager,
  login,
  getManagers,
  getApts,
  getWorkers,
  assignApt,
  assignWorker
}