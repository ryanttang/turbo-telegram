const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const userSchema = new Schema({
  username: {
    type: Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Types.String,
    required: true,
    exclude: true,
    allowOnUpdate: false
  },

  first_name: String,
  last_name: String,
  phone: String,
  contact_method: String,
  address_1: String,
  address_2: String,

  role: '', // can have "manager", "staff", "boss" roles
  assigned: {} // if role = boss here we can pass an object that contains the properties and managers, if role = manager or worker we can pass apts in there, if manager we can allow him to create new worker profiles and generate pages. 
});

const Login = mongoose.model('user', userSchema);
module.exports = Login;