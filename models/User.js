const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    managers: [{_id: ObjectId}] 
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

export default User = mongoose.model('User', userSchema)