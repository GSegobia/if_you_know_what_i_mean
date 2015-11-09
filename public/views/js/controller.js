var app=angular.module("MainApp",[]);


app.controller("MainController",function($http, $scope){

	$http.get("/api/users").success(function(response){
			$scope.usuarios = response;
			return $scope.usuarios;
	});

	$scope.deleteUser = function(id){
		$http.delete("/api/users/"+id, { _id : id }).success(function(result) {
      		console.log(result);
      $scope.resultDelete = result;

      $http.get("/api/users").success(function(response){
			$scope.usuarios = response;
	});

	  }).error(function() {
	      console.log("error");
	  });
	}

	 $scope.showUser = function(id){
    	$http.get("/api/users/"+id).success(function(response){
    		$scope.usuarioAtual = response;
		});

    }

    $scope.editUser = function(id){	
        
        var data = {
	            name: $scope.usuarioAtual.name,
				username: $scope.usuarioAtual.username,
				email: $scope.usuarioAtual.email,
				password: $scope.usuarioAtual.password
        	};

        console.log(data);

           $http.put('/api/users/'+id,data).success(function (response) {
            });

            $http.get("/api/users").success(function(response){
					$scope.usuarios = response;
			});
    }
	

});