const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    managers: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;