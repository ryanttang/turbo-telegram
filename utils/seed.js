const mongoose = require('mongoose');
const User = require('../models/User');
const Property = require('../models/Property');
const { genTenMan, gen25Apt } = require('./fakerMethods');

const colors = require('colors');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/turbodb', {
  useNewUrlParser: true
});

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded".rainbow);
});


const user = new User({
  username: "bobby",
  password: "dallas",
  first_name: "Boddy",
  last_name: "Dallas",
  phone: "818-599-9843",
  contact_method: "cell",
  address_1: "5000 Sunbelt Blvd",
  address_2: "98743",
  role: "admin",
})



const seeding = async () => {
  await User.remove({}, function (err) {
    console.log('Users removed'.red.bgBlack)
    user.save(err => {
      err && console.error(err);
      console.log('admin saved'.rainbow);
    })
    genTenMan();
  });
  await Property.remove({}, function (err) {
    console.log('Properties removed'.green.bgBlack)
    gen25Apt();
  });
  mongoose.connection.close()
}

seeding();
