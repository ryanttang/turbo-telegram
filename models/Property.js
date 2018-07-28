const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    address:  String,
    super: String,
    pointOfContact: String,
    calendar: String
  });
 
  const Property = mongoose.model('Property', propertySchema)
  module.exports = Property;