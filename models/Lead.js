import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const leadSchema = new Schema({
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

export default Lead = mongoose.model('Lead', leadSchema);

