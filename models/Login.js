const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const loginSchema = new Schema({
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
  }
});

const Login = mongoose.model('logins', loginSchema);
module.exports = Login;


/*
this is code from rest-hapi
module.exports = function (mongoose) {
    var modelName = "login";
    var Types = mongoose.Schema.Types;
    var Schema = new mongoose.Schema({
      email: {
        type: Types.String,
        required: true,
        unique: true
      },
      password: {
        type: Types.String,
        required: true,
        exclude: true,
        allowOnUpdate: false
      }
    });
    
    Schema.statics = {
      collectionName: modelName,
      routeOptions: {}
    };
    
    return Schema;
  };
  */