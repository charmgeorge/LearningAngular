//1. MODULE- in the global angular object there is a module that is a function that takes a name (the name of your app), and it takes an array of dependencies
//the var is the same as the module name but it can be different. It is the string 'myApp' that is connected to the DOM.
var myApp = angular.module('myApp', ['ngRoute']);

//Routes -- when the hash changes check the route to find which one matches.
myApp.config(function ($routeProvider){
 
    $routeProvider
    
    .when('/', {
        tempalteUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

// CONTROLLERS-this is the controller for the view. Within this will be the model
myApp.controller('mainController', ['$scope','$filter', function ($scope, $filter) {
    
    $scope.alertClick = function(){
        
        alert("Clicked!");
    };
    
    $scope.name = 'First Controller name';
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}
    ];
    
    console.log($scope.rules);
    
    
}]);

//angular gives a new instance of the $scope object when we request it. The $scope object is unique to this specific controller. 
myApp.controller('secondController', ['$scope', function($scope){
    
    $scope.name = 'Second Controller name';
    
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

//event listener for hashchange
window.addEventListener('hashchange', function(){
    
    if(window.location.hash === '#/bookmark/1'){
        console.log('Page 1 is cool.')
    }
});
