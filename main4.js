// Create an app with no dependencies
var myApp = angular.module("myApp", []);

// Create service that will be shared across controllers
myApp.factory("Data", function(){
  return {message: "I'm data from a service"};
});

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
}
