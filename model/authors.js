// authors.js
'use strict';

var mongoose = require('mongoose');
var CommentsSchema = require('./comments');
var Schema = mongoose.Schema;

// Schema for authors
var AuthorsSchema = new Schema({
	author: String,
	comments: [CommentsSchema.schema]
});

module.exports = mongoose.model('Author', AuthorsSchema);