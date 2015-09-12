app.controller('HomeController', ['$scope', 'pics', function($scope, pics) {
	pics.success(function(data) {
		$scope.pics = data;
	});
}]);