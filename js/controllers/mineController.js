app.controller('MineController', ['$scope', 'pics', '$routeParams', function($scope, pics, $routeParams) {
	pics.success(function(data) {
		$scope.detail = data[$routeParams]	/////?????
	})
}])