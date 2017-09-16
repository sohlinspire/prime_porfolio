console.log('js sourced');

var myApp = angular.module('myApp', []);

myApp.controller('displayController', function(){
//this code inside runs when controller is initialized
var display = this;
// name.message = this;
console.log(this);
display.name = 'Enter name below';
display.message = 'Enter message below';

display.people = [];
display.addPerson = function(nameBox, messageBox) {
  var person = {nameBox : nameBox, messageBox : messageBox};
  display.people.push(person);
  console.log(display.people);
};

//create a display.delete function
display.delete = function(spot) {
  display.people.splice(spot, 1);
};

});//end of myApp.controller
