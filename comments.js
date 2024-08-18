// Create web server
// npm install --save express
// npm install --save body-parser
// npm install --save mongoose
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./comment.js');

// Connect to the database
mongoose.connect('mongodb://localhost/comments');

// Create a new express application
const app = express();

// Use the body-parser middleware
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    createdAt: new Date(),
  });

  comment.save((err, comment) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send(comment);
  });
});

// Get all comments
app.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(comments);
  });
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(comment);
  });
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(comment);
  });
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, comment) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(comment);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});