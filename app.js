//1. MODULE- in the global angular object there is a module that is a function that takes a name (the name of your app), and it takes an array of dependencies
//the var is the same as the module name but it can be different. It is the string 'myApp' that is connected to the DOM.
var myApp = angular.module('myApp', []);

// CONTROLLERS-this is the controller for the view. Within this will be the model
myApp.controller('mainController', ['$scope','$filter', function ($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;

}]);


var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson(){
  var john = new Person('John', 'Doe');
  console.log(john);
}

logPerson();
