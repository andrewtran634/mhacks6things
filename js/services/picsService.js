app.factory('picsService', ['$http', function($http) {
	return {

		get: function() {
			return $http.get('/pics');
			.success(function(data) {
				return data;
			});
			.error(function(data) {
				return data;
			});
		},

		create: function(picData) {
			return $http.post('/pics', picData);
		},

		delete: function(picData) {
			return $http.delete('/pics/' + id);
		}
	}
}]);