const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    worker: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  });

const Manager = mongoose.model('Manager', managerSchema);
module.exports = Manager;
