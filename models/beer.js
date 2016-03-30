var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema = new mongoose.Schema({
  name: String,
  type: String,
  allergic: Boolean,
  ingredients: Array
});

// Taken from http://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id
// in regards to how backbone really prefers 'id' over '_id'
BeerSchema.virtual('id').get(function() {
	return this._id;
});
BeerSchema.set('toJSON', {
    virtuals: true
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);