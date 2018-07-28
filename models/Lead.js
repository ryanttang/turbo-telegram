const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    managers: [{ type: Schema.Types.ObjectId, ref: 'Manager' }],
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  });

const Lead = mongoose.model('Lead', leadSchema); 

module.exports = Lead;

