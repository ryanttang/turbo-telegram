const mongoose = require('mongoose');

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