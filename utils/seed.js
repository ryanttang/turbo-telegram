const mongoose = require('mongoose');
const User = require('../models/User');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/turbodb', {
  useNewUrlParser: true
});

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

User.remove({}, function(err) { 
  console.log('collection removed') 
});

const user = new User ({
  username: "bobby",
  password: "dallas"
})

user.save(err => {
  err && console.error(err);
  console.log('user saved');
  mongoose.connection.close()
})
