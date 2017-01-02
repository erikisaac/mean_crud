console.log("main.js online!");

var app = angular.module("mean_crudApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($http){
	var self = this;
	self.all = [];

	self.getNames = getNames;

	function getNames(){
		$http
			.get("http://localhost:3000/names")
			.then(function(response) {
				self.all = resopnse.data.name;
			});
	};

	getNames();

	this.helloWorld = function(hi) {
		hi = "Hello world!";
		return hi;
	};
};