const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    fname:  String,
    lname: String,
    email: String,
    phone:   String,
    password: String,
    address: String,
    worker: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  });

const Manager = mongoose.model('Manager', managerSchema);
module.exports = Manager;
