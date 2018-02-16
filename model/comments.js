//model/comments.js
'use strict';

// import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create new instance of the mongoose.schema
// The schema takes an object that shows the shape of the database entries
var CommentsSchema = new Schema({
	author: String,
	text: String
});

// Export the module for use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);