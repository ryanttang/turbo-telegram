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
  role: [],
  assigned: []
});

const Login = mongoose.model('user', loginSchema);
module.exports = Login;