var app=angular.module("MainApp",[]);


app.controller("MainController",function($http, $scope){

	this.rola= $http.get("/api/users").success(function(response){
		$scope.usuarios = response;
		return $scope.usuarios;
	});

});