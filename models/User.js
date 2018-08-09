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

  role: [],
  assigned: []
});

const Login = mongoose.model('user', userSchema);
module.exports = Login;