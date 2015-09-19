app.controller('HomeController', ['$scope', 'picsService', function($scope, picsService) {
	picsService.get(function(data) {
		console.log(data);
        $scope.pics = data;
	});
}]);