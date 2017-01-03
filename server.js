var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override'); //used to manipulate POST

app.use(express.static(__dirname + '/public'));

// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mean_crud');

var NameSchema = mongoose.Schema({
	name: String,
});

var Name = mongoose.model('Name', NameSchema);

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

router.route('/names')
  //GET all names
  .get(getAll)

function getAll(request, response) {
	console.log("Is the getAll function running?")
 	Name.find(function(error, names) {
   		if(error) response.json({message: 'Could not find any names'});

    	response.json({names});
  	}).select('-__v');
}

// This was the issue!
// getAll();

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});