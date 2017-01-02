var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mean_crud');

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});