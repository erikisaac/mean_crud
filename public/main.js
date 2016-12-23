console.log("main.js online!");

var app = angular.module("mean_crudApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController(){
  this.helloWorld = function(hi) {
		hi = "Hello world!";
		return hi;
	};
};