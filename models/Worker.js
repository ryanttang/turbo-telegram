const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    properties: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  });

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;