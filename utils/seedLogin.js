const mongoose = require('mongoose');
const User = require('../models/User');


mongoose.connect('mongodb://localhost:27017/turbodb', {
  useNewUrlParser: true
});

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

const user = new User ({
  username: "bobby",
  password: "dallas"
})

user.save(err => {
  console.log('user saved');
  err && console.error(err);
})

