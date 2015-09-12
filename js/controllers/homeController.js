app.controller('HomeController', ['$scope', 'picsService', function($scope, picsService) {
	picsService.get(function(data) {
		$scope.pics = data;
	});
}]);