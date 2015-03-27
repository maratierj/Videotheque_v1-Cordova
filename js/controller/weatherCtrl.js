function weatherCtrl($scope, $http,GeolocationService){

	$scope.panel = 0;
	$scope.Math = Math;

	$scope.search = function(){
		//var url = "http://api.openweathermap.org/data/2.5/weather?q="+ $scope.city +",fr";
		//http://api.openweathermap.org/data/2.5/forecast/daily?q=angers,fr&cnt=10&mode=json&units=metric
		var url ="http://api.openweathermap.org/data/2.5/forecast/daily?q="+ $scope.city +",fr&cnt=10&mode=json&units=metric";
		$scope.loader = true;
		$http.get(url).success(httpSuccess).error(httpError);
	}

	$scope.expand = function(e){
		$elem = $(e.currentTarget);
		$elem.addClass('row_active').siblings().removeClass('row_active');
	}

	$scope.geolocate = function(){
		GeolocationService.getCurrentPosition(function(position){
			$scope.loader = true;
			$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+ position.coords.latitude +"&lon="+ position.coords.longitude +"&cnt=10&mode=json&units=metric").success(httpSuccess).error(httpError);
		})
	}

	httpSuccess = function(response){
		$scope.panel = 1;
		$scope.loader = false;
		$scope.weather = response;
	}

	httpError = function(){
		alert("Impossible de récupérer les informations");
	}
}