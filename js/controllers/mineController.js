app.controller('MineController', ['$scope', 'picsService', '$routeParams', function($scope, pics, $routeParams) {
	pics.success(function(data) {
		$scope.detail = data[$routeParams]	/////?????
	})
}])