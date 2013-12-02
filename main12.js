var app = angular.module('basicBehaviors', []);

app.directive('enter', function(){
	return function(scope, element){
		element.bind("mouseenter",function(){
			console.log("I'm inside an element");
		});
	}
});

app.directive('leave', function(){
	return function(scope, element){
		element.bind("mouseleave",function(){
			console.log("I'm leaving an element");
		});
	}
});