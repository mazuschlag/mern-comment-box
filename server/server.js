// server.js
'use strict';

// Import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('../model/comments');
var Author = require('../model/authors');

var app = express();
var router = express.Router();

// Set up our port to either a predetermined port number or 3001
var port = process.env.API_PORT || 3001;

// DB configuration
mongoose.connect('mongodb://<USERNAME>:<PASSWORD>@ds062448.mlab.com:62448/mern-comments');

// Now configure the API to use bodyParser and look for JSON data in request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing, 
// set headers to allow CORS with middleware
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	// remove caching to get most recent comments
	res.setHeader('Cache-control', 'no-cache');
	next();
});

// Add a post route to add authors
router.route('/authors')
	.get(function(req, res) {
		Author.find(function (err, authors) {
			if (err) {
				res.send(err);
			}
			res.json(authors);
		});
	})
	.post(function(req, res) {
		// Check if author exists in the database
		Author.findOne({ author: req.body.author }, function(err, authors) {
			if (err) {
				res.send(err);
			}
			// If not, create a new author and save it
			if (!authors) {
				var author = new Author();
				author.author = req.body.author;
				author.comments = [];
				author.save(function(err) {
					if (err) {
						res.send(err);
					}
					res.json({ message: 'New user created' });
				});
			} else {
				res.json({ message: 'User already exists' });
			}
		});
	});

router.route('/authors/:author_id')
	.delete(function (req, res) {
		Author.remove({ _id: req.params.author_id }, function(err, author) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Author successfully deleted' });
		});
	});

// Add base route to our /comments router
router.route('/comments')
	// Retrieve all comments from the database
	.get(function(req, res) {
		// Looks at Comment Schema
		Comment.find(function(err, comments) {
			if (err) {
				res.send(err);
			}
			res.json(comments);
		});
	})
	// Post new comment to the database
	.post(function(req, res) {
		var comment = new Comment();
		comment.author = req.body.author;
		comment.text = req.body.text;
		// Adds new comment to the Schema
		comment.save(function(err) {
			if (err) {
				res.send(err);
			}
		})
		.then((req, res, comment) => {
			Author.findOne({ author: req.body.author }, function(err, result) {
				if (err) {
					res.send(err);
				}
				if (result) {
					result.comments.push(comment);
					result.save(function(err){
						if (err) {
							res.send(err);
						}
					});
				}
			});
			res.json({ message: 'Comment successfully added!' });
		});
	});

// Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
// Put updates comments based on the id passed to the route
/*.put(function(req, res) {
	Comment.findById(req.params.comment_id, function(err, comment) {
		if (err) {
			res.send(err);
		}
		// Setting the new author and text to whatever was changed
		// If nothing was changed nothing is altered
		(req.body.author) ? comment.author = req.body.author : null;
		(req.body.text) ? comment.text = req.body.text : null;
		comment.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Comment has been updated' });
		});
	});
})*/
// Delete method for removing a comment from our database
.delete(function(req, res) {
	Comment.remove({ _id: req.params.comment_id }, function(err, comment){
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Comment has been deleted' });
	});
}); 

app.use('/', router);



// Start the server and listen for requests
app.listen(port, function() {
	console.log(`api running on port ${port}`);
});

