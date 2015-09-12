app.factory('pics', ['$http', function($http) {
	return {

		get: function() {
			return $http.get('');
			.success(function(data) {
				return data;
			});
			.error(function(data) {
				return data;
			});
		},

		create: function(picData) {
			return $http.post('', picData);
		},

		delete: function(picData) {
			return $http.delete('' + id);
		}
	}
}]);