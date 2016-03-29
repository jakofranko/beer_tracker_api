var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema = new mongoose.Schema({
  name: String,
  allergic: Boolean,
  ingredients: Array
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);